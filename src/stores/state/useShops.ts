import type { Shop, ShopListing, Sort } from "../../types/types";
import { create } from "zustand";
import { defaultShops } from "../../static/defaultShops";
import type { NextRouter } from "next/router";
import getFiltersFromUrl from "../../utils/url/getFiltersFromUrl";
import type { ShopName } from "../../../common/types/types";
import { Shops } from "../../../common/keys/keys";
import { getShopListings } from "../../requests/backend";
import { defaultShopOrder } from "../../static/storeOrder";

type ShopState = {
  shops: Record<ShopName, Shop>;
  activeShop: ShopName;
  sort: Sort;
  slides: ShopListing[];
  lastListingUpdate: Record<ShopName, number>;
  lastSearched: string;
  shopOrder: ShopName[];
  setSlides: (slides: ShopListing[]) => void;
  updateListings: (shop: ShopName) => Promise<void>;
  resetShops: () => void;
  setSort: (sort: Sort, router: NextRouter) => void;
  setLastSearched: (lastSearched: string) => void;
  setActiveShop: (shop: ShopName) => void;
  setShopOrder: (shopOrder: ShopName[]) => void;
};

const useShops = create<ShopState>()((set, get) => ({
  shops: defaultShops,
  activeShop: "Leboncoin",
  sort:
    ((typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("sort")) as Sort) ||
    "recommended",
  filters:
    typeof window !== "undefined"
      ? getFiltersFromUrl(window.location.search)
      : {},
  lastListingUpdate: Object.keys(Shops).reduce(
    (acc, shop) => ({ ...acc, [shop]: 0 }),
    {}
  ) as Record<ShopName, number>,
  slides: [],
  lastSearched: "",
  shopOrder: defaultShopOrder,

  setShopOrder: (shopOrder: ShopName[]) => {
    set((state) => ({
      ...state,
      shopOrder,
    }));
  },
  setSlides: (slides: ShopListing[]) => {
    set((state) => ({
      ...state,
      slides,
    }));
  },
  setLastSearched: (lastSearched: string) => {
    set((state) => ({
      ...state,
      lastSearched,
    }));
  },
  updateListings: async (shop: ShopName) => {
    const { listings, page, name } = get().shops[shop];
    const currentDate = Date.now();
    if (!name) return;
    if (page + 1 > 1) {
      set((state) => ({
        ...state,
        shops: {
          ...state.shops,
          [shop]: {
            ...state.shops[shop],
            loadingNextPage: true,
          },
        },
      }));
    }
    set((state) => ({
      ...state,
      lastListingUpdate: {
        ...state.lastListingUpdate,
        [shop]: currentDate,
      },
      shops: {
        ...state.shops,
        [shop]: {
          ...state.shops[shop],
          status: "loading",
        },
      },
    }));

    const response = await getShopListings({ name, page: page + 1 }).catch(
      () => {
        return set((state) => {
          if (currentDate < get().lastListingUpdate[shop]) return state;
          if (page + 1 === 1) {
            const newOrder = [
              ...state.shopOrder.filter((s) => s !== shop),
              shop,
            ];
            return {
              ...state,
              shops: {
                ...state.shops,
                [shop]: {
                  ...state.shops[shop],
                  status: "error",
                },
              },
              shopOrder: newOrder,
              activeShop: newOrder[0],
            };
          }
          return {
            ...state,
            shops: {
              ...state.shops,
              [shop]: {
                ...state.shops[shop],
                hasFetchedAll: true,
              },
            },
          };
        });
      }
    );
    if (!response) return;

    if (currentDate < get().lastListingUpdate[shop]) return;
    set((state) => ({
      ...state,
      lastListingUpdate: {
        ...state.lastListingUpdate,
        [shop]: currentDate,
      },
    }));
    if (!listings.length && !response.data.listings.length)
      return set((state) => ({
        ...state,
        shops: {
          ...state.shops,
          [shop]: {
            ...state.shops[shop],
            status: "no_results",
          },
        },
      }));
    const newListings =
      page === 0
        ? response.data.listings
        : [...listings, ...response.data.listings];
    set((state) => ({
      ...state,
      shops: {
        ...state.shops,
        [shop]: {
          ...state.shops[shop],
          listings: newListings,
          page: page + 1,
          status: "success",
          hasFetchedAll: response.data.listings.length === 0,
          loadingNextPage: false,
        },
      },
    }));
  },
  resetShops: () => {
    set((state) => ({
      ...state,
      shops: defaultShops,
    }));
  },
  
  setSort: (sort, router) => {
    if (!Object.keys(router.query).length) return;
    void router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: sort },
    });
    set({ sort: sort });
  },
  setActiveShop: (shop) => {
    const updateListings = get().updateListings;
    const shops = get().shops;
    const shopOrder = get().shopOrder;
    if (shops[shop].status === "waiting") {
      void updateListings(shop);
    }

    const shopOrderIndex = shopOrder.findIndex((value) => value === shop);
    const nextShop = shopOrder[shopOrderIndex + 1];
    if (nextShop && shops[nextShop].status === "waiting") {
      void updateListings(shopOrder[shopOrderIndex + 1] as ShopName);
    }

    set((state) => ({
      ...state,
      activeShop: shop,
    }));
  },
}));

export default useShops;

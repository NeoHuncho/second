import type { Shop, ShopListing, Sort } from "../../types/types";
import { create } from "zustand";
import { defaultShops } from "../../static/defaultShops";
import type { NextRouter } from "next/router";
import getFiltersFromUrl from "../../utils/url/getFiltersFromUrl";
import type {
  Filter,
  MultiKeyFilterType,
  ShopName,
} from "../../../common/types/types";
import { MultiKeyFilterTypes, Shops } from "../../../common/keys/keys";
import { getShopListings } from "../../requests/backend";

type ShopState = {
  shops: Record<ShopName, Shop>;
  activeShop: ShopName;
  sort: Sort;
  filters: Partial<Record<Filter, string>>;
  slides: ShopListing[];
  setSlides: (slides: ShopListing[]) => void;
  updateListings: (shop: ShopName) => Promise<void>;
  resetShops: () => void;
  setSort: (sort: Sort, router: NextRouter) => void;
  setFilter: ({
    key,
    value,
    router,
  }: {
    key: string;
    value?: string;
    router: NextRouter;
  }) => void;
  setMultiKeyFilter: ({
    key,
    router,
    typeKey,
  }: {
    key: string;
    router: NextRouter;
    typeKey: MultiKeyFilterType;
  }) => void;
  removeFilter: ({
    key,
    router,
    typeKey,
  }: {
    key: Filter;
    router: NextRouter;
    typeKey?: MultiKeyFilterType;
  }) => void;
  resetFilters: () => void;
  setActiveShop: (shop: ShopName) => void;
  lastListingUpdate: Record<ShopName, number>;
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
  setSlides: (slides: ShopListing[]) => {
    set((state) => ({
      ...state,
      slides,
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
          if (page + 1 === 1)
            return {
              ...state,
              shops: {
                ...state.shops,
                [shop]: {
                  ...state.shops[shop],
                  status: "error",
                },
              },
            };
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

  setFilter: ({ key, value, router }) => {
    //value is optional. This is for multi key filters where the value is the key. In this cas we just set the value to true
    set((state) => ({
      ...state,
      filters: {
        ...state.filters,
        [key]: value || true,
      },
    }));
    void router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [key]: value || true,
      },
    });
  },
  setMultiKeyFilter: ({ key, router, typeKey }) => {
    set((state) => ({
      ...state,
      filters: {
        ...state.filters,
        [key]: true,
      },
    }));
    const prevValue = router.query[typeKey] as string | undefined;
    return void router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [typeKey]: prevValue ? `${prevValue}+${key}` : key,
      },
    });
  },
  removeFilter: ({ key, router, typeKey }) => {
    set((state) => {
      const filters = { ...state.filters };
      delete filters[key];
      return {
        ...state,
        filters,
      };
    });
    if (typeKey) {
      const prevValue = router.query[typeKey] as string;

      if (prevValue.split("+").length === 1) {
        const { [typeKey]: value, ...queryWithoutParam } = router.query;
        return void router.push({
          pathname: router.pathname,
          query: queryWithoutParam,
        });
      }

      const newValue = prevValue
        .split("+")
        .filter((value) => value !== key)
        .join("+");
      return void router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          [typeKey]: newValue,
        },
      });
    }
    const { [key]: value, ...queryWithoutParam } = router.query;
    void router.push({
      pathname: router.pathname,
      query: queryWithoutParam,
    });
  },
  resetFilters: () => {
    set((state) => ({
      ...state,
      filters: {},
    }));
  },
  setActiveShop: (shop) => {
    set((state) => ({
      ...state,
      activeShop: shop,
    }));
  },
}));

export default useShops;

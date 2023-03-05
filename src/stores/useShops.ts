import type { Shop, Shops, Sorts } from "../types/types";
import { create } from "zustand";
import axios from "axios";
import type { ShopRes } from "../types/api/shopsRes";
import formatStoreUrl from "../utils/url/formatStoreUrl";
import { defaultShops } from "../static/defaultShops";
import type { NextRouter } from "next/router";
import getFiltersFromUrl from "../utils/url/getFiltersFromUrl";

type ShopState = {
  shops: {
    Vinted: Shop;
    Leboncoin: Shop;
  };
  sort: Sorts;
  filters: Record<string, string>;
  updateListings: (shop: Shops) => Promise<void>;
  resetShops: () => void;
  setSort: (sort: Sorts, router: NextRouter) => void;
  setFilters: ({
    key,
    value,
  }: {
    key: string;
    value: string;
    router: NextRouter;
  }) => void;
  removeFilter: ({ key, router }: { key: string; router: NextRouter }) => void;
  resetFilters: () => void;
  lastListingUpdate: Record<Shops, number>;
};

const useShops = create<ShopState>()((set, get) => ({
  shops: {
    Leboncoin: defaultShops.Leboncoin,
    Vinted: defaultShops.Vinted,
  },
  sort:
    ((typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("sort")) as Sorts) ||
    "recommended",
  filters:
    typeof window !== "undefined"
      ? getFiltersFromUrl(window.location.search)
      : {},
  lastListingUpdate: {
    Leboncoin: 0,
    Vinted: 0,
  },
  updateListings: async (shop: Shops) => {
    const { listings, page, name } = get().shops[shop];
    const url = formatStoreUrl({ store: name, page: page + 1 });
    const currentDate = Date.now();
    if (!url) return;
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
    }));

    const response = await axios.get<ShopRes>(url).catch((err) => {
      return set((state) => ({
        ...state,
        shops: {
          ...state.shops,
          [shop]: {
            ...state.shops[shop],
            status: "error",
          },
        },
      }));
    });
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
      shops: {
        Leboncoin: defaultShops.Leboncoin,
        Vinted: defaultShops.Vinted,
      },
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

  setFilters: ({ key, value, router }) => {
    set((state) => ({
      ...state,
      filters: {
        ...state.filters,
        [key]: value,
      },
    }));
    void router.push({
      pathname: router.pathname,
      query: { ...router.query, [key]: value },
    });
  },
  removeFilter: ({ key, router }) => {
    set((state) => {
      const filters = { ...state.filters };
      delete filters[key];
      return {
        ...state,
        filters,
      };
    });
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
}));

export default useShops;

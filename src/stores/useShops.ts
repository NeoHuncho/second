import type { Shop, Sort } from "../types/types";
import { create } from "zustand";
import axios from "axios";
import type { ShopRes } from "../types/api/shopsRes";
import formatStoreUrl from "../utils/url/formatStoreUrl";
import { defaultShops } from "../static/defaultShops";
import type { NextRouter } from "next/router";
import getFiltersFromUrl from "../utils/url/getFiltersFromUrl";
import type {
  Filter,
  MultiKeyFilterType,
  ShopName,
} from "../../common/types/types";
import { MultiKeyFilterTypes, Shops } from "../../common/types/keys";

type ShopState = {
  shops: Record<ShopName, Shop>;
  sort: Sort;
  filters: Partial<Record<Filter, string>>;
  updateListings: (shop: ShopName) => Promise<void>;
  resetShops: () => void;
  setSort: (sort: Sort, router: NextRouter) => void;
  setFilters: ({
    key,
    value,
  }: {
    key: string;
    value?: string;
    router: NextRouter;
  }) => void;
  removeFilter: ({ key, router }: { key: Filter; router: NextRouter }) => void;
  resetFilters: () => void;
  lastListingUpdate: Record<ShopName, number>;
};

const useShops = create<ShopState>()((set, get) => ({
  shops: defaultShops,
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
  updateListings: async (shop: ShopName) => {
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

    const response = await axios.get<ShopRes>(url).catch(() => {
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

  setFilters: ({ key, value, router }) => {
    //value is optional. This is for multi key filters where the value is the key. In this cas we just set the value to true
    set((state) => ({
      ...state,
      filters: {
        ...state.filters,
        [key]: value || true,
      },
    }));

    if (
      Object.keys(MultiKeyFilterTypes).some((filter) => key.includes(filter))
    ) {
      const typeKey = Object.keys(MultiKeyFilterTypes).find((filter) =>
        key.includes(filter)
      ) as MultiKeyFilterType;
      const prevValue = router.query[typeKey] as string | undefined;
      return void router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          [typeKey]: prevValue ? `${prevValue}+${key}` : key,
        },
      });
    }
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
    if (
      Object.keys(MultiKeyFilterTypes).some((filter) => key.includes(filter))
    ) {
      const typeKey = Object.keys(MultiKeyFilterTypes).find((filter) =>
        key.includes(filter)
      ) as MultiKeyFilterType;
      const prevValue = router.query[typeKey] as string | undefined;
      if (!prevValue) return;

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
}));

export default useShops;

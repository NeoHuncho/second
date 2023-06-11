import type { NextRouter } from "next/router";
import type { Filter, MultiKeyFilterType } from "../../../common/types/types";
import { create } from "zustand";
import { Filters, MultiKeyFilterTypes } from "../../../common/keys/keys";
import type { ParsedUrlQuery } from "querystring";

type FiltersStore = {
  filters: Partial<Record<Filter, string | boolean>>;
  hasChanged: boolean;
  setFilter: ({
    key,
    value,
    router,
  }: {
    key: string;
    value?: string;
    router?: NextRouter;
  }) => void;
  setMultiKeyFilter: ({
    keys,
    typeKey,
  }: {
    keys: Filter[];
    typeKey: MultiKeyFilterType;
  }) => void;
  removeFilter: ({
    key,
    router,
    typeKey,
  }: {
    key: Filter;
    router?: NextRouter;
    typeKey?: MultiKeyFilterType;
  }) => void;
  resetFilters: () => void;
  confirmFilters: ({ router }: { router: NextRouter }) => void;
  setFiltersFromQuery: ({ query }: { query: string }) => void;
};

const useShopFilters = create<FiltersStore>((set, get) => ({
  filters: {},
  hasChanged: false,

  setFilter: ({ key, value, router }) => {
    //value is optional. This is for multi key filters where the value is the key. In this cas we just set the value to true
    set((state) => ({
      ...state,
      hasChanged: true,
      filters: {
        ...state.filters,
        [key]: value || true,
      },
    }));
    router &&
      void router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          [key]: value || true,
        },
      });
  },
  setMultiKeyFilter: ({ keys, typeKey }) => {
    //updating the filters object
    const filters = get().filters;

    const keyFilters = Object.keys(filters).filter((key) =>
      key.includes(typeKey)
    ) as Filter[];
    const newKey = keys.filter((key) => !keyFilters.includes(key))[0];
    const removedKey = keyFilters.filter((key) => !keys.includes(key))[0];

    const newFilters = {
      ...filters,
    };
    if (newKey) newFilters[newKey] = true;
    if (removedKey) delete newFilters[removedKey];

    set((state) => ({
      ...state,
      hasChanged: true,
      filters: newFilters,
    }));
  },
  removeFilter: ({ key, router }) => {
    set((state) => {
      const filters = { ...state.filters };
      delete filters[key];
      return {
        ...state,
        filters,
        hasChanged: true,
      };
    });
    if (!router) return;
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
      hasChanged: true,
    }));
  },
  confirmFilters: ({ router }) => {
    if (!get().hasChanged) return;
    set((state) => ({
      ...state,
      hasChanged: false,
    }));
    const query: Partial<Record<Filter | MultiKeyFilterType, string>> = {};
    const typeKeysFilters = Object.keys(get().filters).filter(
      (key) =>
        !!Object.keys(MultiKeyFilterTypes).filter((typeKey) =>
          key.includes(typeKey)
        ).length
    ) as Filter[];
    const nonTypeKeysFilters = Object.keys(get().filters).filter(
      (key) => !typeKeysFilters.includes(key as Filter)
    ) as Filter[];
    if (nonTypeKeysFilters.length) {
      nonTypeKeysFilters.forEach((key) => {
        query[key] = get().filters[key] as string;
      });
    }
    if (typeKeysFilters.length) {
      const groupedTypeKeys = typeKeysFilters.reduce((acc, key) => {
        const typeKey = Object.keys(MultiKeyFilterTypes).find((typeKey) =>
          key.includes(typeKey)
        ) as MultiKeyFilterType;
        if (acc[typeKey]) {
          acc[typeKey] += `+${key}`;
        } else {
          acc[typeKey] = key;
        }
        return acc;
      }, {} as Record<string, string>);
      Object.keys(groupedTypeKeys).forEach((key) => {
        query[key as MultiKeyFilterType] = groupedTypeKeys[key];
      });
    }

    if (router.query === query) return;
    if (!Object.keys(query).length) return;
    void router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        ...query,
      },
    });
  },
  setFiltersFromQuery: ({ query }) => {
    const filters = query
      .substring(1)
      .split("&")
      .reduce((acc, filter) => {
        const [key, value] = filter.split("=");
        if (!key || !value) return acc;
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

    const parsedUrls = {} as Partial<Record<Filter, string | boolean>>;
    Object.keys(filters)
      .filter((key) => Object.keys(MultiKeyFilterTypes).includes(key))
      .forEach((key) => {
        const value = filters[key];
        if (!value) return;
        const keys = value.split("%2B") as Filter[];
        for (const key of keys) {
          parsedUrls[key] = true;
        }
      });
    Object.keys(filters)
      .filter((key) => Object.keys(Filters).includes(key))
      .map((key) => {
        parsedUrls[key as Filter] = filters[key];
      });
    set((state) => ({
      ...state,
      filters: parsedUrls,
    }));
  },
}));

export default useShopFilters;

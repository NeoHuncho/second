import type { NextRouter } from "next/router";
import type { Filter, MultiKeyFilterType } from "../../../common/types/types";
import { create } from "zustand";
import { MultiKeyFilterTypes } from "../../../common/keys/keys";

type FiltersStore = {
  filters: Partial<Record<Filter, string | boolean>>;

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
};

const useShopFilters = create<FiltersStore>((set, get) => ({
  filters: {},

  setFilter: ({ key, value, router }) => {
    //value is optional. This is for multi key filters where the value is the key. In this cas we just set the value to true
    set((state) => ({
      ...state,
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
    }));
  },
  confirmFilters: ({ router }) => {
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
    console.log(typeKeysFilters, nonTypeKeysFilters);
    if (nonTypeKeysFilters.length) {
      nonTypeKeysFilters.forEach((key) => {
        query[key] = get().filters[key] as string;
      });
    }
    if (typeKeysFilters.length) {
      //we need to group the type keys together
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
    void router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        ...query,
      },
    });
    //add to end of url using router
  },
}));

export default useShopFilters;

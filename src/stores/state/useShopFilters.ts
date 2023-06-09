import type { NextRouter } from "next/router";
import type { Filter, MultiKeyFilterType } from "../../../common/types/types";
import { create } from "zustand";

type FiltersStore = {
  filters: Partial<Record<Filter, string>>;
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
};

const useShopFilters = create<FiltersStore>((set) => ({
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
}));

export default useShopFilters;

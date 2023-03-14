import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useShops from "../../stores/useShops";
import type { ShopName } from "../../../common/types/types";
import { Filters } from "../../../common/types/keys";

import useSuggestedCat from "../../stores/useSuggestedCat";

const useSearch = () => {
  const router = useRouter();
  const {
    updateListings,
    shops,
    resetShops,
    setSort,
    resetFilters,
    setFilters,
  } = useShops();
  const { suggestedCat, suggest, setSuggestedCat } = useSuggestedCat();

  const updateShops = () => {
    resetShops();
    Object.keys(shops).forEach((shop) => {
      void updateListings(shop as ShopName);
    });
  };

  useEffect(() => {
    if (!window.location.search.includes("sort")) {
      setSort("recommended", router);
      return;
    }

    if (
      Object.keys(Filters).every(
        (key) => window.location.search.includes(key) === false
      )
    )
      resetFilters();

    //for suggestedCat

    if (suggestedCat) {
      if (suggest) return;
      setFilters({
        key: "category",
        value: suggestedCat,
        router,
      });
      setSuggestedCat("");
      return;
    }
    if (router.query.query) updateShops();
  }, [router.query]);
};
export default useSearch;

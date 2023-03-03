import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Shops } from "../../types/types";
import useShops from "../../stores/useShops";
import defaultFilters from "../../static/defaultFilters";

const useSearch = () => {
  const router = useRouter();
  const { updateListings, shops, resetShops, setSort, resetFilters } =
    useShops();

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const updateShops = () => {
    resetShops();
    Object.keys(shops).forEach((shop) => {
      void updateListings(shop as Shops);
    });
  };

  useEffect(() => {
    if (!window.location.search.includes("sort"))
      setSort("recommended", router);
    if (
      Object.keys(defaultFilters).every(
        (key) => window.location.search.includes(key) === false
      )
    )
      resetFilters();
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    updateShops();
  }, [router.query]);
};
export default useSearch;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useShops from "../../stores/useShops";
import type { ShopName } from "../../../common/types/types";
import { Filters } from "../../../common/types/keys";

const useSearch = () => {
  const router = useRouter();
  const { updateListings, shops, resetShops, setSort, resetFilters } =
    useShops();

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const updateShops = () => {
    resetShops();
    Object.keys(shops).forEach((shop) => {
      void updateListings(shop as ShopName);
    });
  };

  useEffect(() => {
    if (!window.location.search.includes("sort"))
      setSort("recommended", router);
    if (
      Object.keys(Filters).every(
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

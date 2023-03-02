import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Shops } from "../../types/types";
import useShops from "../../stores/useShops";

const useSearch = () => {
  const router = useRouter();
  const { updateListings, shops, resetShops, setSort, resetFilters } =
    useShops();

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const updateShops = () => {
    resetShops();
    Object.keys(shops).forEach((shop) => {
      updateListings(shop as Shops)
        .then(() => {
          console.log("updated listings");
        })
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    if (!router.query?.sort) setSort("recommended", router);
    if (
      !Object.keys(router.query).includes("priceMin") &&
      !Object.keys(router.query).includes("priceMax")
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

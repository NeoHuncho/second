import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Shops } from "../../types/types";
import useShops from "../../stores/useShops";
import { object } from "zod";

const useSearch = () => {
  const router = useRouter();
  const { updateListings, shops, resetShops, setSort, resetFilters } =
    useShops();
  const [searchShops, setSearchShops] = useState(false);
  const [loading, setLoading] = useState(false);
  const updateShops = () => {
    setLoading(true);
    console.log("resetting shops");
    resetShops();
    Object.keys(shops).forEach((shop) => {
      updateListings(shop as Shops)
        .then(() => {
          setLoading(false);
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
    setSearchShops(true);
  }, [router.query]);

  useEffect(() => {
    if (!searchShops) return;
    updateShops();
    setSearchShops(false);
  }, [searchShops]);
  return { loading };
};
export default useSearch;

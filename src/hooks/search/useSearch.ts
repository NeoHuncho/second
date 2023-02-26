import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Shops } from "../../types/types";
import useShops from "../../stores/useShops";

const useSearch = () => {
  const router = useRouter();
  const { updateListings, shops, resetShops, setSort } = useShops();
  const [searchShops, setSearchShops] = useState(false);

  const updateShops = () => {
    console.log('resetting shops')
    resetShops();
    Object.keys(shops).forEach((shop) => {
      updateListings(shop as Shops)
        .then(() => {
          return null;
        })
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    if (!router.query?.sort) setSort("recommended", router);
    if (!router.query?.query) return;
    setSearchShops(true);
  }, [router.query]);

  useEffect(() => {
    if (!searchShops) return;
    updateShops();
    setSearchShops(false);
  }, [searchShops]);
};
export default useSearch;

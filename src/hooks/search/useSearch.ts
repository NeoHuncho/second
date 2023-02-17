import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Shops } from "../../types/types";
import useShops from "./shops/useShops";

const useSearch = () => {
  const router = useRouter();
  const { updateListings, shops, resetShops } = useShops();
  const [searchShops, setSearchShops] = useState(false);

  const updateShops = () => {
    resetShops(); 
    Object.keys(shops).forEach((shop) => {
      updateListings(shop as Shops)
        .then(() => {
          console.log("updated");
        })
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
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

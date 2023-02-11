import { useEffect, useState } from "react";
import type { LoadingTypes, Shop, ShopListing } from "../../../types/types";
import useSearch from "../useSearch";
import vintedImg from "../../../assets/shops/vinted.png";
const useVinted = () => {
  const { searchTerm } = useSearch();
  const [currentShop, setCurrentShop] = useState<Shop>({
    status: "loading",
    name: "Vinted",
    image: vintedImg,
    listings: [],
  });
  const setLoading = (status: LoadingTypes) => {
    setCurrentShop({ ...currentShop, status });
  };
  useEffect(() => {
    setCurrentShop({ ...currentShop, status: "loading" });
    setTimeout(() => {
      setCurrentShop({ ...currentShop, status: "error", listings: [] });
    }, 500);
  }, [searchTerm]);
  return { currentShop, setLoading };
};

export default useVinted;

import { useEffect, useState } from "react";
import type { Shop, ShopListing } from "../../../types/types";
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
  useEffect(() => {
    setTimeout(() => {
      setCurrentShop({ ...currentShop, status: "error", listings: [] });
    }, 500);
  }, [searchTerm]);
  return { currentShop };
};

export default useVinted;

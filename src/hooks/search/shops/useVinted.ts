import { useEffect, useState } from "react";
import type { Shop } from "../../../types/types";
import useSearch from "../useSearch";
import vintedImage from "../../../assets/shops/vinted.webp";
import axios from "axios";
import type { ShopRes } from "../../../types/api/shopsRes";

const useVinted = () => {
  const { searchTerm, apiUrl, encodedSearchTerm } = useSearch();
  const [currentShop, setCurrentShop] = useState<Shop>({
    status: "loading",
    name: "Vinted",
    color: "#007781",
    image: vintedImage,
    listings: [],
  });

  const getAndSetListings = async () => {
    setCurrentShop({ ...currentShop, status: "loading" });
    const response = await axios.get<ShopRes>(
      `${apiUrl}/stores/vinted?text=${encodedSearchTerm}`
    );
    setCurrentShop({
      ...currentShop,
      status: "success",
      listings: response.data.listings,
    });
  };

  useEffect(() => {
    setCurrentShop({ ...currentShop, status: "loading" });
    getAndSetListings()
      .then(() => {
        console.log("Vinted listings fetched");
      })
      .catch(() => {
        setCurrentShop({ ...currentShop, status: "error" });
      });
  }, [searchTerm]);

  return { currentShop };
};
export default useVinted;

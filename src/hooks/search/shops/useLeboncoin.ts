import { useEffect, useState } from "react";
import type { Shop } from "../../../types/types";
import useSearch from "../useSearch";
import leboncoinImage from "../../../assets/shops/leboncoin.webp";
import axios from "axios";
import type { ShopRes } from "../../../types/api/shopsRes";

const useLeboncoin = () => {
  const { searchTerm, apiUrl, encodedSearchTerm } = useSearch();
  const [currentShop, setCurrentShop] = useState<Shop>({
    status: "loading",
    name: "Leboncoin",
    image: leboncoinImage,
    color: "#FF6F15",
    listings: [],
  });

  const getAndSetListings = async () => {
    if(!searchTerm || !encodedSearchTerm) return;
    setCurrentShop({ ...currentShop, status: "loading" });
    const response = await axios.get<ShopRes>(
      `${apiUrl}/stores/leboncoin?text=${encodedSearchTerm}`
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
        console.log("Leboncoin listings fetched");
      })
      .catch(() => {
        setCurrentShop({ ...currentShop, status: "error" });
      });
  }, [searchTerm]);

  return { currentShop };
};
export default useLeboncoin;

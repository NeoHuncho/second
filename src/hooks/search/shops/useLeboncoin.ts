import { useEffect, useState } from "react";
import type { Shop } from "../../../types/types";
import useSearch from "../useSearch";
import leboncoinImage from "../../../assets/shops/leboncoin.webp";
import axios from "axios";
import type { LeboncoinRes } from "../../../types/api/shopsRes";

const useLeboncoin = () => {
  const { searchTerm, apiUrl, encodedSearchTerm } = useSearch();
  const [currentShop, setCurrentShop] = useState<Shop>({
    status: "loading",
    name: "Leboncoin",
    image: leboncoinImage,
    listings: [],
  });

  const getAndSetListings = async () => {
    setCurrentShop({ ...currentShop, status: "loading" });
    const response = await axios.get<LeboncoinRes>(
      `${apiUrl}/stores/leboncoin?text=${encodedSearchTerm}`
    );
    const listings = response.data.listings.filter(
      (listing) => listing.status === "active" && listing.ad_type === "offer"
    );
    setCurrentShop({ ...currentShop, status: "success", listings });
  };

  useEffect(() => {
    setCurrentShop({ ...currentShop, status: "loading" });
    getAndSetListings()
    .then(() => {
    console.log("Leboncoin listings fetched");
      })
      .catch(() => {
        console.log("error");
      });
  }, [searchTerm]);

  return { currentShop };
};
export default useLeboncoin;

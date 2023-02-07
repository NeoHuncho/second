import { useEffect, useState } from "react";
import leboncoinResponse from "../../../static/leboncoinResponse";
import type { Shop, ShopListing } from "../../../types/types";
import useSearch from "../useSearch";
import leboncoinImage from "../../../assets/shops/leboncoin.webp";
const useLeboncoin = () => {
  const { searchTerm } = useSearch();
  const [currentShop, setCurrentShop] = useState<Shop>({
    status: "loading",
    name: "Leboncoin",
    image: leboncoinImage,
    listings: [],
  });

  useEffect(() => {
    const results: ShopListing[] = leboncoinResponse?.ads
      ?.filter(
        (listing) => listing.status === "active" && listing.ad_type === "offer"
      )
      .map((listing) => ({
        image: listing.images?.small_url,
        title: listing.subject,
        price: listing.price[0] || 0,
      }));
    setTimeout(() => {
      setCurrentShop({ ...currentShop, status: "success", listings: results });
    }, 1100);
  }, [searchTerm]);

  return { currentShop };
};
export default useLeboncoin;

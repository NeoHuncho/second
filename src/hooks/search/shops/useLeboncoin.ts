import { useEffect, useState } from "react";
import leboncoinResponse from "../../../static/leboncoinResponse";
import type { Shop, ShopListing } from "../../../types/types";
import useSearch from "../useSearch";
const useLeboncoin = () => {
  const { searchTerm } = useSearch();
  const [currentShop, setCurrentShop] = useState<Shop>({
    status: "loading",
    shop_name: "Leboncoin",
    shop_image:
      "https://imgs.search.brave.com/rpgqOoSrKg6qvtKAAAv1QysVnwo2ZEq4Sg0wTVKFFYc/rs:fit:1200:520:1/g:ce/aHR0cHM6Ly9pbW1v/Mi5wcm8vaW1hZ2Vz/L3dwLWltYWdlcy8y/MDE4LzAyL2xlYm9u/Y29pbi1lMTU2MTcz/NTkxODcwOS0xNjAw/eDUyMC5wbmc",
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
    setCurrentShop({ ...currentShop, status: "success", listings: results });
  }, [searchTerm]);

  return { currentShop };
};
export default useLeboncoin;

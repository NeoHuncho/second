import type { StaticImageData } from "next/image";
import { Shops } from "../../common/keys/keys";
import type { ShopName } from "../../common/types/types";
import leboncoinImage from "../assets/shops/leboncoin.webp";
import vintedImage from "../assets/shops/vinted.webp";
import type { Shop } from "../types/types";

const defaultShop = (
  name: ShopName,
  image: StaticImageData,
  color: string,
  isDeliveryOnly = false
): Shop => {
  return {
    status: "loading",
    name,
    image,
    color,
    listings: [],
    page: 0,
    hasFetchedAll: false,
    loadingNextPage: false,
    isDeliveryOnly: isDeliveryOnly,
  };
};

export const defaultShops = {
  Leboncoin: defaultShop("Leboncoin", leboncoinImage, "#FF6F15"),
  Vinted: defaultShop("Vinted", vintedImage, "#007781", true),
};

import leboncoinImage from "../../public/assets/shops/leboncoin.webp";
import vintedImage from "../../public/assets/shops/vinted.webp";
import type { Shop } from "../types/types";
const defaultVinted: Shop = {
  status: "loading",
  name: "Vinted",
  color: "#007781",
  image: vintedImage,
  listings: [],
  page: 0,
  hasFetchedAll: false,
  loadingNextPage: false,
};
const defaultLeboncoin: Shop = {
  status: "loading",
  name: "Leboncoin",
  image: leboncoinImage,
  color: "#FF6F15",
  listings: [],
  page: 0,
  hasFetchedAll: false,
  loadingNextPage: false,
};

export const defaultShops = {
  Leboncoin: defaultLeboncoin,
  Vinted: defaultVinted,
};

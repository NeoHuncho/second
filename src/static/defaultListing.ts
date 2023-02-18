import type { ShopListing } from "../types/types";
import { Shop } from "../types/types";

const defaultListing: ShopListing = {
  id: Math.random(),
  title: "Default listing",
  price: 0,
  images: {
    url: "",
    url_thumb: "",
  },
  url: "",
  body: "placeholder",
};

export default defaultListing;

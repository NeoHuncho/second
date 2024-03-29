import type { ShopListing } from "../types/types";

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
  type: "ShopListing",
};

export default defaultListing;

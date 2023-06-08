import type { ShopListing } from "../types";

export interface ShopRes {
  url: string;
  query: {
    url: string;
  };
  cookies: null;
  listings: ShopListing[];
}

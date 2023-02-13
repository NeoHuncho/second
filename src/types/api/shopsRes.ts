import type { ShopListing } from "../types";

export interface ShopRes {
  query: {
    url: string;
  };
  cookies: null;
  listings: ShopListing[];
}

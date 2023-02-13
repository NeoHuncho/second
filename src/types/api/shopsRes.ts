import type { LeboncoinListing } from "../shops/Leboncoin";

export interface LeboncoinRes {
  query: {
    url: string;
  };
  cookies: null;
  listings: LeboncoinListing[];
}

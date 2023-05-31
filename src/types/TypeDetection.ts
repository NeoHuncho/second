import type { LandingListing, ShopListing } from "./types";

export const detectShopListing = (
  listing: ShopListing | LandingListing
): listing is ShopListing => {
  return (listing as ShopListing).type === "ShopListing";
};
export const detectShowcase = (
  listing: ShopListing | LandingListing
): listing is LandingListing => {
  return (listing as LandingListing).repairScore !== undefined;
};

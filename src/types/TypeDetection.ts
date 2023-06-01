import type { LandingListing, ShopListing, ListingChildren } from "./types";

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

export const detectChildShowcase = (
  listing: ShopListing | LandingListing | ListingChildren
): listing is ListingChildren => {
  return (listing as ListingChildren).priceRange !== undefined;
};

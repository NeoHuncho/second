import type {
  LandingListing,
  ShopListing,
  ListingChildren,
  FavoriteListing,
} from "./types";

export const detectShopListing = (
  listing: ShopListing | LandingListing | FavoriteListing
): listing is ShopListing => {
  return (listing as ShopListing).type === "ShopListing";
};
export const detectShowcase = (
  listing: ShopListing | LandingListing | FavoriteListing
): listing is LandingListing => {
  return (listing as LandingListing).repairScore !== undefined;
};

export const detectFavorite = (
  listing: ShopListing | LandingListing | FavoriteListing
): listing is FavoriteListing => {
  return (listing as FavoriteListing).type === "favorite";
};

export const detectChildShowcase = (
  listing: ShopListing | LandingListing | ListingChildren | FavoriteListing
): listing is ListingChildren => {
  return (listing as ListingChildren).priceRange !== undefined;
};

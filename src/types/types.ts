import type { StaticImageData } from "next/image";

export type Shop = {
  name: Shops;
  image: StaticImageData;
  listings: ShopListing[];
  status: LoadingTypes;
};

export type ShopListing = {
  image: string;
  title: string;
  price: number;
};

export type Shops = "Vinted" | "Leboncoin";
export type LoadingTypes = "success" | "error" | "loading";

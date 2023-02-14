import type { StaticImageData } from "next/image";

export type Shop = {
  name: Shops;
  color: string;
  image: StaticImageData;
  listings: ShopListing[];
  status: LoadingTypes;
};

export interface ShopListing {
  id: number;
  publication_date?: string;
  category_name?: string;
  category_id?: string;
  title: string;
  body?: string;
  url?: string;
  price: number;
  images: Images;
  attributes?: Attribute[];
}

interface Images {
  urls?: string[];
  urls_thumb?: string[];
  url_thumb: string;
  url: string;
}

interface Attribute {
  key: string;
  value: string;
  values: string[];
}

export type Shops = "Vinted" | "Leboncoin";
export type LoadingTypes = "success" | "error" | "loading";

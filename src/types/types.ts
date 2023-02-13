import type { StaticImageData } from "next/image";

export type Shop = {
  name: Shops;
  image: StaticImageData;
  listings: ShopListing[];
  status: LoadingTypes;
};

export interface ShopListing {
  list_id: number;
  first_publication_date: string;
  index_date: string;
  status: string;
  category_id: string;
  category_name: string;
  subject: string;
  body: string;
  ad_type: string;
  url: string;
  price: number[];
  price_cents: number;
  images: Images;
  attributes: Attribute[];
}

interface Images {
  thumb_url: string;
  small_url: string;
  urls: string[];
  urls_thumb: string[];
  urls_large: string[];
}

interface Attribute {
  key: string;
  value: string;
  values: string[];
}

export type Shops = "Vinted" | "Leboncoin";
export type LoadingTypes = "success" | "error" | "loading";

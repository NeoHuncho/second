import type { StaticImageData } from "next/image";
import type { ShopName } from "../../common/types/types";

export type Shop = {
  name: ShopName;
  color: string;
  image: StaticImageData;
  listings: ShopListing[];
  status: LoadingStatus;
  page: number;
  hasFetchedAll: boolean;
  loadingNextPage: boolean;
  isDeliveryOnly: boolean;
};

export interface ShopListing {
  id: number;
  publication_date?: string;
  category_name?: string;
  category_id?: string;
  title: string;
  body?: string;
  url: string;
  price: number;
  images: Images;
  attributes?: Attribute[];
  shippable?: boolean;
  condition?: string;
  size?: string;
  type: 'ShopListing';
}

export interface LandingListing{
  title: string;
  url: string;
  image: StaticImageData;
  body?:string
  repairScore?: number;
  type: 'Showcase'
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

export type LoadingStatus = "success" | "error" | "loading" | "no_results";
export type Sort =
  | "recommended"
  | "price_asc"
  | "price_desc"
  | "date_asc"
  | "date_desc";

export type Categories = "all" | "clothes" | "shoes" 
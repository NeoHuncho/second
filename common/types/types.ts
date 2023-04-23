import type { colors } from "../keys/filterKeys";
import type {
  Sorts,
  Shops,
  Filters,
  MultiKeyFilterTypes,
  Categories,
  SizeCategories,
  deliveryMethods,
} from "../keys/keys";

export type ShopName = keyof typeof Shops;
export type Sort = keyof typeof Sorts;
export type Filter = keyof typeof Filters;
export type Color = keyof typeof colors;
export type MultiKeyFilterType = keyof typeof MultiKeyFilterTypes;
export type QueryUrl =
  | "page"
  | "text"
  | "sort"
  | "priceMin"
  | "priceMax"
  | "condition"
  | "category"
  | "size"
  | "city"
  | "lat"
  | "lng"
  | "locationRange"
  | "deliveryMethod"
  | "color";

export type Category = keyof typeof Categories;
export type SizeCategory = keyof typeof SizeCategories;
export type DeliveryMethod = keyof typeof deliveryMethods;

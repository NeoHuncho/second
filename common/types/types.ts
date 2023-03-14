import type {
  Sorts,
  Shops,
  Filters,
  MultiKeyFilterTypes,
  Categories,
} from "./keys";

export type ShopName = keyof typeof Shops;
export type Sort = keyof typeof Sorts;
export type Filter = keyof typeof Filters;
export type MultiKeyFilterType = keyof typeof MultiKeyFilterTypes;
export type QueryUrl =
  | "page"
  | "text"
  | "sort"
  | "priceMin"
  | "priceMax"
  | "condition"
  | "category";
export type Category = keyof typeof Categories;

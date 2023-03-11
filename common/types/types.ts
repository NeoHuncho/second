import type { Sorts, Shops, Filters, MultiKeyFilterTypes } from "./keys";

export type ShopName = keyof typeof Shops;
export type Sort = keyof typeof Sorts;
export type Filter = keyof typeof Filters;
export type MultiKeyFilterType = keyof typeof MultiKeyFilterTypes;
export type QueryUrl = "page" | "text" | "sort" | Filter;

import type { Filters, Sorts, Shops } from "./keys";

export type ShopName = keyof typeof Shops;
export type Filter = keyof typeof Filters;
export type Sort = keyof typeof Sorts;

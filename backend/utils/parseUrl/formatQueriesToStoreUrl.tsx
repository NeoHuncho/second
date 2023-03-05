import type { ShopName } from "../../../common/types/types";
import formatLeboncoin from "./formatStoreUrl/stores/formatLeboncoin";
import formatVinted from "./formatStoreUrl/stores/formatVinted";

export type formatStoreParams = {
  text: string;
  page: string;
  sort?: string;
  priceMin?: string;
  priceMax?: string;
};

const formatQueriesToStoreUrl = (query: Partial<{ [key: string]: string }>) => {
  const params = {
    shop: query.shop as ShopName,
    text: query.query as string,
    page: query.page as string,
    sort: query.sort,
    priceMin: query.priceMin,
    priceMax: query.priceMax,
  };
  if (!params.text) return "";
  if (params.shop === "Leboncoin") return formatLeboncoin(params);
  if (params.shop === "Vinted") return formatVinted(params);
  else return "";
};

export default formatQueriesToStoreUrl;

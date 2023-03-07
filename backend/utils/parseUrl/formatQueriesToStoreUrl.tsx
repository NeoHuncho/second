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
  query.text = query.query;
  if (!query.text) return "";
  if (query.shop === "Leboncoin")
    return formatLeboncoin(query as formatStoreParams);
  if (query.shop === "Vinted") return formatVinted(query as formatStoreParams);
  else return "";
};

export default formatQueriesToStoreUrl;

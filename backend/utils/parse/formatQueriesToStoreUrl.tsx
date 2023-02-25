import type { Shops } from "../../../src/types/types";
import formatLeboncoin from "./formatStoreUrl/formatLeboncoin";
import formatVinted from "./formatStoreUrl/formatVinted";

export type formatStoreUrl = {
  text: string;
  sort?: string;
  page: string;
};

const formatQueriesToStoreUrl = (query: Partial<{ [key: string]: string }>) => {
  const { shop, query: text, page, sort } = query;
  if (!text) return "";
  if (shop === "Leboncoin")
    return formatLeboncoin({ text, sort, page: page || "1" });
  if (shop === "Vinted") return formatVinted({ text, sort, page: page || "1" });
  else return "";
};

export default formatQueriesToStoreUrl;

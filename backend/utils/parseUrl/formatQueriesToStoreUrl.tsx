import type { QueryUrl } from "../../../common/types/types";
import formatEbay from "./formatStoreUrl/stores/formatEbay";
import formatLeboncoin from "./formatStoreUrl/stores/formatLeboncoin";
import formatVinted from "./formatStoreUrl/stores/formatVinted";

export type formatStoreParams = Record<QueryUrl, string>;

const formatQueriesToStoreUrl = (query: Partial<{ [key: string]: string }>) => {
  query.text = query.query;
  if (!query.text) return "";
  if (query.shop === "Leboncoin")
    return formatLeboncoin(query as formatStoreParams);
  if (query.shop === "Vinted") return formatVinted(query as formatStoreParams);
  if (query.shop === "Ebay") return formatEbay(query as formatStoreParams);
  else return "";
};

export default formatQueriesToStoreUrl;

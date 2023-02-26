import type { formatStoreParams } from "../../formatQueriesToStoreUrl";
import formatStoreUrl from "../formatStoreUrl";
import { priceVinted } from "../parsingFunctions/price";
import { sortVinted } from "../parsingFunctions/sort";

const formatVinted = (params: formatStoreParams) => {
  return formatStoreUrl({
    storeUrl: "https://www.vinted.fr/vetements?search_text=",
    params,
    sortQuery: sortVinted,
    formatPrice: priceVinted,
  });
};
export default formatVinted;

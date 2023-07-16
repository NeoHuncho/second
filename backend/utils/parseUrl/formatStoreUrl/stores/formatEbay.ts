import type { formatStoreParams } from "../../formatQueriesToStoreUrl";
import formatStoreUrl from "../formatStoreUrl";
import { filtersEbay } from "../parsingFunctions/filters";
import { sortEbay } from "../parsingFunctions/sort";

const formatEbay = (params: formatStoreParams) => {
  return formatStoreUrl({
    storeUrl: "https://www.ebay.fr/sch/i.html?_nkw=",
    params,
    sortQuery: sortEbay,
    formatFilters: filtersEbay,
  });
};
export default formatEbay;

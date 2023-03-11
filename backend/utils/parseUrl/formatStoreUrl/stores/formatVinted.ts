import type { formatStoreParams } from "../../formatQueriesToStoreUrl";
import formatStoreUrl from "../formatStoreUrl";
import { filtersVinted } from "../parsingFunctions/filters";
import { sortVinted } from "../parsingFunctions/sort";

const formatVinted = (params: formatStoreParams) => {
  return formatStoreUrl({
    storeUrl: "https://www.vinted.fr/vetements?search_text=",
    params,
    sortQuery: sortVinted,
    formatFilters: filtersVinted,
  });
};
export default formatVinted;

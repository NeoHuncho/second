import type { formatStoreParams } from "../../formatQueriesToStoreUrl";
import { sortLeboncoin } from "../parsingFunctions/sort";
import { filtersLeboncoin } from "../parsingFunctions/filters";
import formatStoreUrl from "../formatStoreUrl";

const formatLeboncoin = (params: formatStoreParams) => {
  return formatStoreUrl({
    storeUrl: "https://www.leboncoin.fr/recherche?text=",
    params,
    sortQuery: sortLeboncoin,
    formatFilters: filtersLeboncoin,
  });
};
export default formatLeboncoin;

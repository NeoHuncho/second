import type { formatStoreParams } from "../../formatQueriesToStoreUrl";
import { sortLeboncoin } from "../parsingFunctions/sort";
import { priceLeboncoin } from "../parsingFunctions/price";
import formatStoreUrl from "../formatStoreUrl";

const formatLeboncoin = (params: formatStoreParams) => {
  return formatStoreUrl({
    storeUrl: "https://www.leboncoin.fr/recherche?text=",
    params,
    sortQuery: sortLeboncoin,
    formatPrice: priceLeboncoin,
  });
};
export default formatLeboncoin;

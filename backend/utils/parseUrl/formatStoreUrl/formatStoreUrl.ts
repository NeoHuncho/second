import type { QueryUrl } from "../../../../common/types/types";
import type { formatStoreParams } from "../formatQueriesToStoreUrl";

type Props = {
  storeUrl: string;
  params: formatStoreParams;
  sortQuery: (sort: string | undefined) => string;
  formatFilters: (filters: Record<QueryUrl, string>) => string;
};

const formatStoreUrl = ({
  storeUrl,
  params,
  sortQuery,
  formatFilters,
}: Props) => {
  return `${storeUrl}${encodeURIComponent(params.text)}${sortQuery(
    params.sort
  )}${formatFilters(params)}&page=${params.page}`;
};

export default formatStoreUrl;

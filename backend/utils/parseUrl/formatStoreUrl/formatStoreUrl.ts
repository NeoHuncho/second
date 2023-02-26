import type { formatStoreParams } from "../formatQueriesToStoreUrl";

type Props = {
  storeUrl: string;
  params: formatStoreParams;
  sortQuery: (sort: string | undefined) => string;
  formatPrice: (
    priceMin: string | undefined,
    priceMax: string | undefined
  ) => string;
};

const formatStoreUrl = ({
  storeUrl,
  params,
  sortQuery,
  formatPrice,
}: Props) => {
  return `${storeUrl}${encodeURIComponent(params.text)}${sortQuery(
    params.sort
  )}${formatPrice(params.priceMin, params.priceMax)}&page=${params.page}`;
};

export default formatStoreUrl;

import type { QueryUrl } from "../../../../../common/types/types";

const filtersLeboncoin = (filters: Record<QueryUrl, string>) => {
  const { priceMin, priceMax } = filters;
  let filtersString = "";
  if (priceMin && priceMax) filtersString = `&price=${priceMin}-${priceMax}`;
  if (priceMin && !priceMax) filtersString = `&price=${priceMin}-max`;
  if (!priceMin && priceMax) filtersString = `&price=min-${priceMax}`;
  return filtersString;
};

const filtersVinted = (filters: Record<QueryUrl, string>) => {
  const { priceMin, priceMax } = filters;
  let filtersString = "";
  if (priceMin && priceMax)
    filtersString = `&price_from=${priceMin}&price_to=${priceMax}`;
  if (priceMin) return (filtersString = `&price_from=${priceMin}`);
  if (priceMax) return (filtersString = `&price_to=${priceMax}`);
  return filtersString;
};
export { filtersLeboncoin, filtersVinted };

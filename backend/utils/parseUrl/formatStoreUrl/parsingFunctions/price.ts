const priceLeboncoin = (
  priceMin: string | undefined,
  priceMax: string | undefined
) => {
  if (priceMin && priceMax) return `&price=${priceMin}-${priceMax}`;
  if (priceMin && !priceMax) return `&price=${priceMin}-max`;
  if (!priceMin && priceMax) return `&price=min-${priceMax}`;
  return "";
};

const priceVinted = (
  priceMin: string | undefined,
  priceMax: string | undefined
) => {
  if (priceMin && priceMax)
    return `&price_from=${priceMin}&price_to=${priceMax}`;
  if (priceMin) return `&price_from=${priceMin}`;
  if (priceMax) return `&price_to=${priceMax}`;
  return "";
};
export { priceLeboncoin, priceVinted };

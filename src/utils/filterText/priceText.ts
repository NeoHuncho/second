interface Props {
  filters: Record<string, string>;
  value?: string | number;
  type?: string;
}
const priceText = ({ filters, value, type }: Props) => {
  const hasMin = !!filters.priceMin;
  const hasMax = !!filters.priceMax;
  const hasValue = !!value;
  if (!type) {
    return filters.priceMax && filters.priceMin
      ? `${filters.priceMin}€ - ${filters.priceMax}€`
      : filters.priceMax
      ? `${filters.priceMax}€ max`
      : filters.priceMin
      ? `min ${filters.priceMin}€`
      : "Prix";
  }

  switch (type) {
    case "priceMin": {
      if (!hasValue) {
        const text = hasMax ? `min ${filters.priceMax as string}€` : "Prix";
        return text;
      } else {
        const text = hasMax
          ? `${value}€ - ${filters.priceMax as string}€`
          : `min ${value}€`;
        return text;
      }
      break;
    }

    case "priceMax": {
      if (!hasValue) {
        const text = hasMin ? `${filters.priceMin as string}€ max` : "Prix";
        return text;
      } else {
        const text = hasMin
          ? `${filters.priceMin as string}€ - ${value}€`
          : `${value}€ max`;
        return text;
      }
      break;
    }

    default:
      return "Prix";
      break;
  }
};
export default priceText;

import type { formatStoreUrl } from "../formatQueriesToStoreUrl";

const sortQuery = (sort: string | undefined) => {
  if (!sort) return "";
  switch (sort) {
    case "price_asc":
      return "&order=price_low_to_high";
    case "price_desc":
      return "&order=price_high_to_low";
    case "date_asc":
      return "";
    case "date_desc":
      return "&order=newest_first";
    default:
      return "";
  }
};

const formatVinted = ({ text, sort, page }: formatStoreUrl) => {
  return `https://www.vinted.fr/catalog?search_text=${encodeURIComponent(
    text
  )}${sortQuery(sort)}&page=${page || 1}`;
};
export default formatVinted;

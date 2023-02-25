import type { formatStoreUrl } from "../formatQueriesToStoreUrl";

const sortQuery = (sort: string | undefined) => {
  if (!sort) return "";
  switch (sort) {
    case "price_asc":
      return "&sort=price&order=asc";
    case "price_desc":
      return "&sort=price&order=desc";
    case "date_asc":
      return "&sort=date&order=asc";
    case "date_desc":
      return "&sort=date&order=desc";
    default:
      return "";
  }
};

const formatLeboncoin = ({ text, sort, page }: formatStoreUrl) => {
  return `https://www.leboncoin.fr/recherche?text=${encodeURIComponent(
    text
  )}${sortQuery(sort)}&page=${page}`;
};
export default formatLeboncoin;

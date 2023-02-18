import type { Shops } from "../../../src/types/types";

type Props = {
  shop: Shops;
  text: string;
  page: string;
};
const parseUrl = ({ shop, text, page }: Props) => {
  if (shop === "Leboncoin")
    return `https://www.leboncoin.fr/recherche?text=${encodeURIComponent(
      text
    )}&page=${page}`;
  if (shop === "Vinted")
    return `https://www.vinted.fr/catalog?search_text=${encodeURIComponent(
      text
    )}&page=${page}`;
  else return "";
};

export default parseUrl;

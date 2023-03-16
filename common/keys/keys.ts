import {
  conditionFilters,
  priceFilters,
  sizeMan,
  sizeWoman,
  sizeChild,
} from "./filterKeys";

export const Shops = { Leboncoin: "Leboncoin", Vinted: "Vinted" };
export const Sorts = {
  recommended: "Pertinence",
  price_asc: "Prix croissant",
  price_desc: "Prix décroissant",
  date_asc: "Date ancienne",
  date_desc: "Date récente",
};

export const Filters = {
  category: "Catégorie",
  ...conditionFilters,
  ...priceFilters,
  ...sizeMan,
  ...sizeWoman,
  ...sizeChild,
};

export const MultiKeyFilterTypes = {
  condition: "État",
};

export const Categories = {
  clothes: "Vêtements",
  shoes: "Chaussures",
};

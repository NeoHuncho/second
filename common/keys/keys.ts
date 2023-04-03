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
  size: "Taille",
};

export const Categories = {
  clothes: "Vêtements",
  shoes: "Chaussures",
};

export const SizeCategories={
  woman: "Femmes",
  man: "Hommes",
  child: "Enfants",
}

export const showcaseTabs={
  phone: "Téléphone",
  laptop: "Ordinateur",
}

export const showcaseCategories={
  repairable: "Multimédia réparable",
}

export const deliveryMethods = {
  delivery: "Livraison 📦",
  location: "Proche de moi 📍",
  both: "Les deux 📦📍",
}
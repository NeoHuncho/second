import {
  conditionFilters,
  priceFilters,
  sizeMan,
  sizeWoman,
  sizeChild,
  colors,
} from "./filterKeys";

export const Shops = { Leboncoin: "Leboncoin", Vinted: "Vinted", Ebay: "Ebay" };
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
  ...colors,
};

export const MultiKeyFilterTypes = {
  condition: "État",
  size: "Taille",
  color: "Couleur",
};

export const ShoesClothesOnlyFilters = {
  size: "Taille",
  color: "Couleur",
};

export const Categories = {
  all: "Tout",
  clothes: "Vêtements",
  shoes: "Chaussures",
};

export const SizeCategories = {
  woman: "Femmes",
  man: "Hommes",
  child: "Enfants",
};

export const showcaseTabs = {
  phone: "Téléphone",
  laptop: "Ordinateur",
};

export const showcaseCategories = {
  repairable: "Multimédia réparable",
};

export const deliveryMethods = {
  delivery: "Livraison 📦",
  location: "Proche de moi 📍",
  both: "Les deux 📦📍",
};

import type { Sorts } from "../types/types";

type Type = {
  [key in Sorts]: string;
};
const defaultSorts: Type = {
  recommended: "Pertinence",
  price_asc: "Prix croissant",
  price_desc: "Prix décroissant",
  date_asc: "Date ancienne",
  date_desc: "Date récente",
};

export default defaultSorts;

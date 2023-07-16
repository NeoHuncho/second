const sortLeboncoin = (sort: string | undefined) => {
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
const sortVinted = (sort: string | undefined) => {
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

const sortEbay = (sort: string | undefined) => {
  if (!sort) return "";
  return "";
};

export { sortLeboncoin, sortVinted, sortEbay };

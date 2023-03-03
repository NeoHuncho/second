import defaultFilters from "../../static/defaultFilters";

const getFiltersFromUrl = (url: string) => {
  const urlParams = new URLSearchParams(url);
  const filters: Record<string, string> = {};
  urlParams.forEach((value, key) => {
    if (Object.keys(defaultFilters).includes(key)) filters[key] = value;
  });
  return filters;
};
export default getFiltersFromUrl;

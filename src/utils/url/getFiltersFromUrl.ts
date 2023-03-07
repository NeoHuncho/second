import { Filters } from "../../../common/types/keys";

const getFiltersFromUrl = (url: string) => {
  const urlParams = new URLSearchParams(url);
  const filters: Record<string, string> = {};
  urlParams.forEach((value, key) => {
    if (Object.keys(Filters).includes(key)) filters[key] = value;
  });
  return filters;
};
export default getFiltersFromUrl;

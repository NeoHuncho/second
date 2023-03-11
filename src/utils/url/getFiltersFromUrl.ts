import { Filters, MultiKeyFilterTypes } from "../../../common/types/keys";
import type { Filter } from "../../../common/types/types";

const getFiltersFromUrl = (url: string) => {
  const urlParams = new URLSearchParams(url);
  const filters: Record<string, string> = {};
  urlParams.forEach((value, key) => {
    if (Object.keys(MultiKeyFilterTypes).includes(key)) {
      const values = value.split("+");
      return values.forEach((value) => {
        filters[value] = value;
      });
    }
    if (Object.keys(Filters).includes(key)) return (filters[key] = value);
  });
  return filters as Record<Filter, string>;
};
export default getFiltersFromUrl;

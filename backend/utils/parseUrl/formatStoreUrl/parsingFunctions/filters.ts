import type {
  Category,
  Filter,
  QueryUrl,
} from "../../../../../common/types/types";
import { categoriesLeboncoin, categoriesVinted } from "../static/category";
import { conditionsLeboncoin, conditionsVinted } from "../static/condition";
import { sizesLeboncoin, sizesVinted } from "../static/size";

const multiChoiceFilterParser = ({
  filters,
  key,
  staticValues,
}: {
  filters: Record<QueryUrl, string>;
  key: QueryUrl;
  staticValues: Partial<Record<Filter, string | null>>;
}) => {
  const conditionsArray: string[] = [];
  filters[key].split("+").forEach((condition) => {
    const conditionValue = staticValues[condition as Filter];
    if (!conditionValue) return;
    conditionsArray.push(conditionValue);
  });

  return [...new Set(conditionsArray)];
};

const filtersLeboncoin = (filters: Record<QueryUrl, string>) => {
  const { priceMin, priceMax, category } = filters;
  let filtersString = "";

  if (priceMin && priceMax) filtersString = `&price=${priceMin}-${priceMax}`;
  else if (priceMin) filtersString = `&price=${priceMin}-max`;
  else if (priceMax) filtersString = `&price=min-${priceMax}`;
  if (Object.keys(filters).some((key) => key.includes("condition"))) {
    const conditions = multiChoiceFilterParser({
      filters,
      key: "condition",
      staticValues: conditionsLeboncoin,
    });
    filtersString += `&item_condition=${conditions.join("%2C")}`;
  }

  if (category)
    filtersString += `&category=${categoriesLeboncoin[category as Category]}`;

  if (Object.keys(filters).some((key) => key.includes("size"))) {
    const sizes = multiChoiceFilterParser({
      filters,
      key: "size",
      staticValues: sizesLeboncoin,
    });
    filtersString += `&shoe_size=${sizes.join("%2C")}`;
  }
  return filtersString;
};

const filtersVinted = (filters: Record<QueryUrl, string>) => {
  const { priceMin, priceMax, category } = filters;
  let filtersString = "";

  if (priceMin && priceMax)
    filtersString = `&price_from=${priceMin}&price_to=${priceMax}`;
  else if (priceMin) filtersString = `&price_from=${priceMin}`;
  else if (priceMax) filtersString = `&price_to=${priceMax}`;

  if (Object.keys(filters).some((key) => key.includes("condition"))) {
    if (!filters.condition?.toString()) return filtersString;
    const conditions = multiChoiceFilterParser({
      filters,
      key: "condition",
      staticValues: conditionsVinted,
    });
    filtersString += `&${conditions.join("&")}`;
  }

  if (Object.keys(filters).some((key) => key.includes("size"))) {
    const sizes = multiChoiceFilterParser({
      filters,
      key: "size",
      staticValues: sizesVinted,
    });
    filtersString += `&size_id%5B%5D=${sizes.join("&size_id%5B%5D=")}`;
  }
  if (category) filtersString += `&${categoriesVinted[category as Category]}`;

  return filtersString;
};
export { filtersLeboncoin, filtersVinted };

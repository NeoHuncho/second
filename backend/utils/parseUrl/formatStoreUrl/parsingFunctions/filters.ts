import type {
  Category,
  Filter,
  QueryUrl,
} from "../../../../../common/types/types";
import { categoriesLeboncoin, categoriesVinted } from "../static/category";
import { colorsLeboncoin, colorsVinted } from "../static/color";
import { conditionsLeboncoin, conditionsVinted } from "../static/condition";
import {
  clothesTypesLeboncoin,
  sizesLeboncoin,
  sizesVinted,
} from "../static/size";

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
  const {
    priceMin,
    priceMax,
    category,
    lat,
    lng,
    locationRange,
    deliveryMethod,
    city,
    color,
    size,
    condition,
  } = filters;
  let filtersString = "";
  if (priceMin && priceMax) filtersString = `&price=${priceMin}-${priceMax}`;
  else if (priceMin) filtersString = `&price=${priceMin}-max`;
  else if (priceMax) filtersString = `&price=min-${priceMax}`;
  if (condition && category !== "all") {
    const conditions = multiChoiceFilterParser({
      filters,
      key: "condition",
      staticValues: conditionsLeboncoin,
    });
    if (category === "shoes" || category === "clothes")
      filtersString += `&clothing_condition_a=${conditions.join("%2C")}`;
  }

  if (category && category !== "all")
    filtersString += `&category=${categoriesLeboncoin[category as Category]}`;

  if (size) {
    const sizes = multiChoiceFilterParser({
      filters,
      key: "size",
      staticValues: sizesLeboncoin,
    });

    if (category === "shoes")
      filtersString += `&shoe_size=${sizes.join("%2C")}`;
    else {
      const clothesType = [];
      if (size.includes("sizeWoman"))
        clothesType.push(clothesTypesLeboncoin.womanClothesTypes);
      if (size.includes("sizeMan"))
        clothesType.push(clothesTypesLeboncoin.manClothesTypes);
      if (size.includes("sizeChild"))
        clothesType.push(clothesTypesLeboncoin.childClothesTypes);
      filtersString += `&clothing_type=${clothesType.join(
        "%2C"
      )}&clothing_st=${sizes.join("%2C")}`;
    }
  }
  if (deliveryMethod && deliveryMethod !== "delivery") {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (deliveryMethod === "both") filtersString += `&shippable=1`;
    filtersString += `&locations=${city}__${lat}_${lng}_10000_${
      parseInt(locationRange) * 1000
    }`;
  }
  if (color) {
    const colors = multiChoiceFilterParser({
      filters,
      key: "color",
      staticValues: colorsLeboncoin,
    });
    filtersString += `&clothing_color_a=${colors.join("%2C")}`;
  }
  return filtersString;
};

const filtersVinted = (filters: Record<QueryUrl, string>) => {
  const { priceMin, priceMax, category, condition, size, color } = filters;
  let filtersString = "";

  if (priceMin && priceMax)
    filtersString = `&price_from=${priceMin}&price_to=${priceMax}`;
  else if (priceMin) filtersString = `&price_from=${priceMin}`;
  else if (priceMax) filtersString = `&price_to=${priceMax}`;

  if (condition) {
    if (!filters.condition?.toString()) return filtersString;
    const conditions = multiChoiceFilterParser({
      filters,
      key: "condition",
      staticValues: conditionsVinted,
    });
    filtersString += `&${conditions.join("&")}`;
  }

  if (size) {
    const sizes = multiChoiceFilterParser({
      filters,
      key: "size",
      staticValues: sizesVinted,
    });
    filtersString += `&size_ids%5B%5D=${sizes.join("&size_id%5B%5D=")}`;
  }
  if (color) {
    const colors = multiChoiceFilterParser({
      filters,
      key: "color",
      staticValues: colorsVinted,
    });
    filtersString += `&color_ids%5B%5D=${colors.join("&color_ids%5B%5D=")}`;
  }
  if (category && category !== "all")
    filtersString += `&${categoriesVinted[category as Category]}`;

  return filtersString;
};

const filtersEbay = (filters: Record<QueryUrl, string>) => {
  return "";
};
export { filtersLeboncoin, filtersVinted, filtersEbay };

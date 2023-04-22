import type {
  Category,
  Filter,
  QueryUrl,
} from "../../../../../common/types/types";
import { categoriesLeboncoin, categoriesVinted } from "../static/category";
import { conditionsLeboncoin, conditionsVinted } from "../static/condition";
import { clothesTypesLeboncoin, sizesLeboncoin, sizesVinted } from "../static/size";

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
  const {page, text, ...cleanedFilters}=filters;
  const { priceMin, priceMax, category,lat,lng, locationRange, deliveryMethod,city } = filters;
  let filtersString = "";

  if (priceMin && priceMax) filtersString = `&price=${priceMin}-${priceMax}`;
  else if (priceMin) filtersString = `&price=${priceMin}-max`;
  else if (priceMax) filtersString = `&price=min-${priceMax}`;
  if (Object.keys(cleanedFilters).some((key) => key.includes("condition"))) {
    const conditions = multiChoiceFilterParser({
      filters,
      key: "condition",
      staticValues: conditionsLeboncoin,
    });
    filtersString += `&item_condition=${conditions.join("%2C")}`;
  }

  if (category && category!=='all')
    filtersString += `&category=${categoriesLeboncoin[category as Category]}`;

  if (Object.keys(cleanedFilters).some((key) => key.includes("size"))) {
    const sizes = multiChoiceFilterParser({
      filters,
      key: "size",
      staticValues: sizesLeboncoin,
    });
    if(category==='shoes')
      filtersString += `&shoe_size=${sizes.join("%2C")}`;
    else {
      const clothesType=[];
      if(Object.values(cleanedFilters).some((filter)=>filter.includes('sizeWoman')))clothesType.push(clothesTypesLeboncoin.womanClothesTypes);
      if(Object.values(cleanedFilters).some((filter)=> filter.includes('sizeMan')))clothesType.push(clothesTypesLeboncoin.manClothesTypes)
      if(Object.values(cleanedFilters).some((filter)=> filter.includes('sizeChild')))clothesType.push(clothesTypesLeboncoin.childClothesTypes)
      filtersString += `&clothing_type=${clothesType.join('%2C')}&clothing_st=${sizes.join("%2C")}`
    }
  }
  if(deliveryMethod!=='delivery'){
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    filtersString+=`&locations=${city}__${lat}_${lng}_10000_${parseInt(locationRange)*1000}`
    
  }
  return filtersString;
};

const filtersVinted = (filters: Record<QueryUrl, string>) => {
   const {page, text, ...cleanedFilters}=filters;
  const { priceMin, priceMax, category } = filters;
  let filtersString = "";

  if (priceMin && priceMax)
    filtersString = `&price_from=${priceMin}&price_to=${priceMax}`;
  else if (priceMin) filtersString = `&price_from=${priceMin}`;
  else if (priceMax) filtersString = `&price_to=${priceMax}`;

  if (Object.keys(cleanedFilters).some((key) => key.includes("condition"))) {
    if (!filters.condition?.toString()) return filtersString;
    const conditions = multiChoiceFilterParser({
      filters,
      key: "condition",
      staticValues: conditionsVinted,
    });
    filtersString += `&${conditions.join("&")}`;
  }

  if (Object.keys(cleanedFilters).some((key) => key.includes("size"))) {
    const sizes = multiChoiceFilterParser({
      filters,
      key: "size",
      staticValues: sizesVinted,
    });
    filtersString += `&size_id%5B%5D=${sizes.join("&size_id%5B%5D=")}`;
  }
  if (category && category!=='all') filtersString += `&${categoriesVinted[category as Category]}`;

  return filtersString;
};
export { filtersLeboncoin, filtersVinted };

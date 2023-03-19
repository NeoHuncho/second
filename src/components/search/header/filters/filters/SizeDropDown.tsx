import { Checkbox, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { SizeCategories } from "../../../../../../common/keys/keys";
import type { Filter, SizeCategory } from "../../../../../../common/types/types";
import useShops from "../../../../../stores/useShops";
import multiText from "../../../../../utils/filterText/multiText";
import type { DropDownInterface } from "../FiltersListing";

const useSizeDropdown = ({
  setFilterText,
  multiValues,
  typeKey,
}: DropDownInterface) => {
  const router = useRouter();
  const {
    filters: storeFilters,
    setFilters: setStoreFilters,
    removeFilter,
  } = useShops();

  const getValueCategory = (category: string) => {
    return multiValues?.filter((value) => {
      if (storeFilters.category === 'clothes') {
        return value[0].includes(`size${category}`) && !value[0].includes(`size${category}Shoes`)
      }
      return value[0].includes(`size${category}Shoes`)
    }) as [Filter, string][]
  }

  const valuesCategories = {
    man: getValueCategory('Man'),
    woman: getValueCategory('Woman'),
    child: getValueCategory('Child'),
  }
  console.log(valuesCategories)
  const [categoryClicked, setCategotyClicked] = useState<SizeCategory | null>(null)
  const onClickCategory = (category: SizeCategory) => {
    setCategotyClicked(category)
  }
  const [filters, setFilters] = useState(
    multiValues
      ?.filter(([key]) => Object.keys(storeFilters).includes(key))
      .map(([key]) => key)
  );
  const onChange = (valueKey: Filter, value: boolean) => {
    setFilters((prev) => {
      if (!prev) return [];
      if (value) {
        const newFilters = [...prev, valueKey];
        if (typeKey)
          setFilterText(multiText({ filters: newFilters, key: typeKey }));
        setStoreFilters({ key: valueKey, router });
        return newFilters;
      }
      const newFilters = prev.filter((key) => key !== valueKey);
      if (typeKey)
        setFilterText(multiText({ filters: newFilters, key: typeKey }));
      removeFilter({ key: valueKey, router });
      return newFilters;
    });
  };

  return { onChange, filters, valuesCategories, categoryClicked, onClickCategory };
};

const SizeDropDown = ({
  setFilterText,
  multiValues,
  typeKey,
}: DropDownInterface) => {
  const { onChange, filters, valuesCategories, categoryClicked, onClickCategory } = useSizeDropdown({
    setFilterText,
    multiValues,
    typeKey,
  });
  // console.log(categoryClicked, valuesCategories)
  if (!multiValues) return <></>;
  return (
    <div className="flex flex-col gap-2 max-h-44 overflow-y-scroll scrollbar-visible  w-36 -ml-3 -mr-3">
      {!categoryClicked &&
        <div className="flex flex-col gap-2">
          {Object.keys(valuesCategories).map((category) => (
            <Text
              key={category}
              onClick={() => onClickCategory(category as SizeCategory)}
              style={{ cursor: "pointer" }}
              className="pl-2"
            >
              {SizeCategories[category as SizeCategory]}
            </Text>
          ))}
        </div>
      }
      {categoryClicked && valuesCategories[categoryClicked].map(([key, value]) => (
        <Checkbox
          checked={filters?.includes(key)}
          onChange={(event) => onChange(key, event.currentTarget.checked)}
          label={value}
          key={key}
        />
      ))}
    </div>
  );
};

export default SizeDropDown;

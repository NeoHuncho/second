import { Checkbox, ColorSwatch, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import type { Color, Filter } from "../../../../../../common/types/types";
import useShopFilters from "../../../../../stores/state/useShopFilters";
import multiText from "../../../../../utils/filterText/multiText";
import type { DropDownInterface } from "../FiltersListing";
import colorsHex from "../../../../../static/colorsHex";

const useMultiDropdown = ({
  setFilterText,
  multiValues,
  typeKey,
}: DropDownInterface) => {
  const router = useRouter();
  const {
    filters: storeFilters,
    setMultiKeyFilter: setStoreFilters,
    removeFilter,
  } = useShopFilters();
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
        if (typeKey) {
          setFilterText(multiText({ filters: newFilters, key: typeKey }));
          setStoreFilters({ key: valueKey, router, typeKey });
        }
        return newFilters;
      }
      const newFilters = prev.filter((key) => key !== valueKey);
      if (typeKey)
        setFilterText(multiText({ filters: newFilters, key: typeKey }));
      removeFilter({ key: valueKey, router, typeKey });
      return newFilters;
    });
  };
  return { onChange, filters };
};

const ColorValueAndHex = ({
  value,
  color,
}: {
  value: string;
  color: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <ColorSwatch color={color} size={16} />
      <Text>{value}</Text>
    </div>
  );
};

const MultiDropDown = ({
  setFilterText,
  multiValues,
  typeKey,
}: DropDownInterface) => {
  const { onChange, filters } = useMultiDropdown({
    setFilterText,
    multiValues,
    typeKey,
  });
  if (!multiValues) return <></>;
  return (
    <div className="scrollbar-visible -ml-3 -mr-3 flex max-h-44 flex-col  gap-3 overflow-y-scroll ">
      {multiValues.map(([key, value]) => (
        <Checkbox
          checked={filters?.includes(key)}
          onChange={(event) => onChange(key, event.currentTarget.checked)}
          label={
            typeKey === "color" ? (
              <ColorValueAndHex color={colorsHex[key as Color]} value={value} />
            ) : (
              value
            )
          }
          key={key}
          className="pr-5"
        />
      ))}
    </div>
  );
};

export default MultiDropDown;

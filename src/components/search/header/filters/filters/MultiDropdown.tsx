import { Checkbox, ColorSwatch, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import type { Color, Filter } from "../../../../../../common/types/types";
import useShops from "../../../../../stores/state/useShops";
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
  } = useShops();
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
      removeFilter({ key: valueKey, router });
      return newFilters;
    });
  };
  return { onChange, filters };
};

const ColorValueAndHex = ({ value, color }: { value: string, color: string }) => {
  return (
    <div className="flex gap-2 items-center">
      <ColorSwatch color={color} size={16} />
      <Text>
        {value}
      </Text>
    </div>
  )
}

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
    <div className="flex flex-col gap-3 max-h-44 overflow-y-scroll scrollbar-visible  -ml-3 -mr-3 ">
      {multiValues.map(([key, value]) => (
        <Checkbox
          checked={filters?.includes(key)}
          onChange={(event) => onChange(key, event.currentTarget.checked)}
          label={typeKey === 'color' ? <ColorValueAndHex color={colorsHex[key as Color]} value={value} /> : value}
          key={key}
          className="pr-5"
        />
      ))}
    </div>
  );
};

export default MultiDropDown;

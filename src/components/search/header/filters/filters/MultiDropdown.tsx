import { Checkbox } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import type { Filter } from "../../../../../../common/types/types";
import useShops from "../../../../../stores/state/useShops";
import multiText from "../../../../../utils/filterText/multiText";
import type { DropDownInterface } from "../FiltersListing";

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
  return { onChange, filters };
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
    <div className="flex flex-col gap-3">
      {multiValues.map(([key, value]) => (
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

export default MultiDropDown;

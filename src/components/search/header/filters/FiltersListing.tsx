import { colors } from "../../../../../common/keys/filterKeys";
import { Filters } from "../../../../../common/keys/keys";
import type {
  Filter as FilterKey,
  MultiKeyFilterType,
} from "../../../../../common/types/types";
import useShops from "../../../../stores/state/useShops";
import multiText from "../../../../utils/filterText/multiText";

import priceText from "../../../../utils/filterText/priceText";
import Filter from "./Filter";

import MultiDropDown from "./filters/MultiDropdown";
import PriceDropdown from "./filters/PriceDropdown";
import SizeDropDown from "./filters/SizeDropDown";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: MultiKeyFilterType;
}

const FiltersListing = () => {
  const { filters } = useShops();

  const priceKeys = Object.keys(filters).filter((key) => key.includes("price"));
  const conditionKeys = Object.keys(filters).filter((key) =>
    key.includes("condition")
  );
  const sizeKeys = Object.keys(filters).filter((key) => key.includes("size"));
  const colorKeys = Object.keys(filters).filter((key) =>
    Object.keys(colors).includes(key)
  );
  return (
    <div className="flex flex-wrap gap-4">
      {(filters.category === "shoes" || filters.category === "clothes") && (
        <Filter
          initialText={multiText({ key: "size" })}
          text={multiText({ filters: sizeKeys, key: "size" })}
          DropDown={SizeDropDown}
          keys={sizeKeys}
          multiValues={
            Object.keys(Filters)
              .filter((key) => key.includes("size"))
              .map((key) => [key, Filters[key as keyof typeof Filters]]) as [
              FilterKey,
              string
            ][]
          }
          typeKey="size"
        />
      )}
      <Filter
        initialText={priceText({})}
        text={priceText({ filters })}
        DropDown={PriceDropdown}
        keys={priceKeys}
      />
      <Filter
        initialText={multiText({ key: "condition" })}
        text={multiText({ filters: conditionKeys, key: "condition" })}
        DropDown={MultiDropDown}
        keys={conditionKeys}
        multiValues={
          Object.keys(Filters)
            .filter((key) => key.includes("condition"))
            .map((key) => [key, Filters[key as keyof typeof Filters]]) as [
            FilterKey,
            string
          ][]
        }
        typeKey="condition"
      />
      {(filters.category === "shoes" || filters.category === "clothes") && (
        <Filter
          initialText={multiText({ key: "color" })}
          text={multiText({ filters: colorKeys, key: "color" })}
          DropDown={MultiDropDown}
          keys={colorKeys}
          multiValues={
            Object.keys(colors).map((key) => [
              key,
              Filters[key as keyof typeof Filters],
            ]) as [FilterKey, string][]
          }
          typeKey="color"
        />
      )}
    </div>
  );
};
export default FiltersListing;

import { Filters } from "../../../../../common/types/keys";
import type { Filter as FilterKey } from "../../../../../common/types/types";
import useShops from "../../../../stores/useShops";
import categoryText from "../../../../utils/filterText/categoryText";
import multiText from "../../../../utils/filterText/multiText";

import priceText from "../../../../utils/filterText/priceText";
import Filter from "./Filter";
import CategoryDropdown from "./filters/CategoryDropdown";
import MultiDropDown from "./filters/MultiDropdown";
import PriceDropdown from "./filters/PriceDropdown";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: string;
}

const FiltersListing = () => {
  const { filters } = useShops();

  const priceKeys = Object.keys(filters).filter((key) => key.includes("price"));
  const conditionKeys = Object.keys(filters).filter((key) =>
    key.includes("condition")
  );
  return (
    <div className="flex flex-wrap gap-4">
      <Filter
        initialText={Filters["category"]}
        text={categoryText({ filters })}
        DropDown={CategoryDropdown}
        keys={["category"]}
        typeKey="category"
      />
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
    </div>
  );
};
export default FiltersListing;

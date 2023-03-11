import { Filters } from "../../../../../common/types/keys";
import useShops from "../../../../stores/useShops";
import multiText from "../../../../utils/filterText/multiText";

import priceText from "../../../../utils/filterText/priceText";
import Filter from "./Filter";
import MultiDropDown from "./filters/MultiDropdown";
import PriceDropdown from "./filters/PriceDropdown";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [string, string][];
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
        multiValues={Object.entries(filters).filter((key) =>
          key[0].includes("condition")
        )}
      />
    </div>
  );
};
export default FiltersListing;

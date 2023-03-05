import { Badge, Popover, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Icon } from "../../../../assets/icons";
import useShops from "../../../../stores/useShops";

import priceText from "../../../../utils/filterText/priceText";
import Filter from "./Filter";
import PriceDropdown from "./filters/Price";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
}

const FiltersListing = () => {
  const { filters } = useShops();
  return (
    <div className="flex flex-wrap justify-between">
      <Filter
        text={priceText({ filters })}
        DropDown={PriceDropdown}
        keys={["priceMin", "priceMax"]}
      />
    </div>
  );
};
export default FiltersListing;

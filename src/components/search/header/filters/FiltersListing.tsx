import { Button, Divider, Drawer } from "@mantine/core";
import { colors } from "../../../../../common/keys/filterKeys";
import { Filters } from "../../../../../common/keys/keys";
import type {
  Filter as FilterKey,
  MultiKeyFilterType,
} from "../../../../../common/types/types";
import useShopFilters from "../../../../stores/state/useShopFilters";
import multiText from "../../../../utils/filterText/multiText";

import priceText from "../../../../utils/filterText/priceText";
import Filter from "./Filter";

import MultiDropDown from "./filters/MultiDropdown";
import PriceDropdown from "./filters/PriceDropdown";
import SizeDropDown from "./filters/SizeDropDown";
import { useDisclosure } from "@mantine/hooks";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: MultiKeyFilterType;
}

const FiltersListing = () => {
  const { filters } = useShopFilters();
  const [opened, { open, close }] = useDisclosure(false);
  const priceKeys = Object.keys(filters).filter((key) => key.includes("price"));
  const conditionKeys = Object.keys(filters).filter((key) =>
    key.includes("condition")
  );
  const sizeKeys = Object.keys(filters).filter((key) => key.includes("size"));
  const colorKeys = Object.keys(filters).filter((key) =>
    Object.keys(colors).includes(key)
  );
  return (
    <>
      <Drawer opened={opened} onClose={close} position="right">
        <div className="absolute bottom-0 w-full pb-2">
          <Divider my="sm" />
          <div className="flex w-full justify-between gap-2 px-2">
            <Button variant="outline">Tout effacer</Button>
            <Button radius={"sm"} color="secondary">
              Rechercher
            </Button>
          </div>
        </div>
      </Drawer>
      <Button
        onClick={open}
        className="sm:h-12"
        color="secondary"
        variant="outline"
      >
        Filtrer
      </Button>
    </>
  );
};
export default FiltersListing;

// <div className="flex flex-wrap gap-4">
//   {(filters.category === "shoes" || filters.category === "clothes") && (
//     <Filter
//       initialText={multiText({ key: "size" })}
//       text={multiText({ filters: sizeKeys, key: "size" })}
//       DropDown={SizeDropDown}
//       keys={sizeKeys}
//       multiValues={
//         Object.keys(Filters)
//           .filter((key) => key.includes("size"))
//           .map((key) => [key, Filters[key as keyof typeof Filters]]) as [
//           FilterKey,
//           string
//         ][]
//       }
//       typeKey="size"
//     />
//   )}
//   <Filter
//     initialText={priceText({})}
//     text={priceText({ filters })}
//     DropDown={PriceDropdown}
//     keys={priceKeys}
//   />
//   <Filter
//     initialText={multiText({ key: "condition" })}
//     text={multiText({ filters: conditionKeys, key: "condition" })}
//     DropDown={MultiDropDown}
//     keys={conditionKeys}
//     multiValues={
//       Object.keys(Filters)
//         .filter((key) => key.includes("condition"))
//         .map((key) => [key, Filters[key as keyof typeof Filters]]) as [
//         FilterKey,
//         string
//       ][]
//     }
//     typeKey="condition"
//   />
//   {(filters.category === "shoes" || filters.category === "clothes") && (
//     <Filter
//       initialText={multiText({ key: "color" })}
//       text={multiText({ filters: colorKeys, key: "color" })}
//       DropDown={MultiDropDown}
//       keys={colorKeys}
//       multiValues={
//         Object.keys(colors).map((key) => [
//           key,
//           Filters[key as keyof typeof Filters],
//         ]) as [FilterKey, string][]
//       }
//       typeKey="color"
//     />
//   )}
// </div>

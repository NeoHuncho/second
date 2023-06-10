import { Button, Divider, MultiSelect, NumberInput, Text } from "@mantine/core";
import useShopFilters from "../../../../stores/state/useShopFilters";
import { colors } from "../../../../../common/keys/filterKeys";
import CategorySelect from "../../../searchBar/CategorySelect";
import { Icon } from "../../../../assets/icons";
import { Filters } from "../../../../../common/keys/keys";
import type { MultiKeyFilterType } from "../../../../../common/types/types";

type FilterBlockProps = {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
};

export default function FilterDrawer() {
  const { filters } = useShopFilters();
  const priceKeys = Object.keys(filters).filter((key) => key.includes("price"));
  const selectedConditions = Object.keys(filters).filter((key) =>
    key.includes("condition")
  );
  const sizeKeys = Object.keys(filters).filter((key) => key.includes("size"));
  const colorKeys = Object.keys(filters).filter((key) =>
    Object.keys(colors).includes(key)
  );
  const conditionData = Object.keys(Filters)
    .filter((key) => key.includes("condition"))
    .map((key) => ({
      value: key,
      label: Filters[key as keyof typeof Filters],
    }));

  return (
    <>
      <div className="flex flex-col  px-2">
        <FilterBlock title="Catégorie" icon={<Icon name="OutlineList" />}>
          <CategorySelect
            radius="sm"
            size="md"
            className="mt-2"
            onChange={(val) => console.log(val)}
          />
        </FilterBlock>
        <FilterBlock title="Prix" icon={<Icon name="OutlineEuro" />}>
          <div className="flex  gap-2">
            <NumberInput
              label="Minimum"
              hideControls
              rightSection={<Icon name="OutlineEuro" />}
            />
            <NumberInput
              label="Maximum"
              hideControls
              rightSection={<Icon name="OutlineEuro" />}
            />
          </div>
        </FilterBlock>
        <FilterBlock title="État" icon={<Icon name="Adjustments" />}>
          <MultiSelectFilter
            data={conditionData}
            value={selectedConditions}
            typeKey="condition"
          />
        </FilterBlock>
      </div>
      <DrawerFooter />
    </>
  );
}

function FilterBlock({ children, title, icon: Icon }: FilterBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {Icon}
        <Text size="md" weight={500}>
          {title}
        </Text>
      </div>
      {children}
      <Divider my="lg" />
    </div>
  );
}

function MultiSelectFilter({
  data,
  value,
  typeKey,
}: {
  data: { value: string; label: string }[];
  value: string[];
  typeKey: MultiKeyFilterType;
}) {
  const { setMultiKeyFilter } = useShopFilters();
  const onChange = (val: string[]) => {
    setMultiKeyFilter({ key: val[val.length - 1] as string, typeKey });
  };

  return (
    <MultiSelect
      value={value}
      onChange={onChange}
      size="md"
      placeholder="État"
      data={data}
    />
  );
}

function DrawerFooter() {
  return (
    <div className="absolute bottom-0 w-full pb-2 pr-2">
      <Divider my="sm" />
      <div className="flex w-full justify-between gap-2 px-2">
        <Button size="md" variant="outline">
          Tout effacer
        </Button>
        <Button size="md" radius={"sm"} color="secondary">
          Rechercher
        </Button>
      </div>
    </div>
  );
}
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

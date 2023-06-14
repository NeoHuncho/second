import {
  Button,
  ColorSwatch,
  Divider,
  MultiSelect,
  NumberInput,
  Text,
} from "@mantine/core";
import useShopFilters from "../../../../stores/state/useShopFilters";
import { colors } from "../../../../../common/keys/filterKeys";
import CategorySelect from "../../../searchBar/CategorySelect";
import { Icon } from "../../../../assets/icons";
import { Filters } from "../../../../../common/keys/keys";
import type {
  Filter,
  MultiKeyFilterType,
} from "../../../../../common/types/types";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import colorsHex from "../../../../static/colorsHex";

type FilterBlockProps = {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
};

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  color: string;
  label: string;
}

export default function FilterDrawer({ close }: { close: () => void }) {
  const { filters, setFilter, removeFilter } = useShopFilters();
  const isClothesOrShoes =
    filters.category === "clothes" || filters.category === "shoes";

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

  const clothesSizeData = Object.keys(Filters)
    .filter((key) => key.includes("size") && !key.includes("Shoes"))
    .map((key) => ({
      value: key,
      label: Filters[key as keyof typeof Filters],
      group: key.includes("Woman")
        ? "Taille femme"
        : key.includes("Man")
        ? "Taille homme"
        : "Taille Enfant",
    }));
  const clothesShoesData = Object.keys(Filters)
    .filter((key) => key.includes("size") && key.includes("Shoes"))
    .map((key) => ({
      value: key,
      label: Filters[key as keyof typeof Filters],
      group: key.includes("Woman")
        ? "Taille femme"
        : key.includes("Man")
        ? "Taille homme"
        : "Taille Enfant",
    }));

  const colorData = Object.keys(colors).map((key) => ({
    value: key,
    label: Filters[key as keyof typeof Filters],
    color: colorsHex[key as keyof typeof colorsHex],
  }));
  function onPriceChange({
    num,
    type,
  }: {
    num: number | "";
    type: "priceMin" | "priceMax";
  }) {
    if (!num) removeFilter({ key: type });
    else setFilter({ key: type, value: num.toString() });
  }

  return (
    <>
      <div className="flex flex-col  px-2">
        <FilterBlock title="Catégorie" icon={<Icon name="OutlineList" />}>
          <CategorySelect
            radius="sm"
            size="md"
            className="mt-2"
            onChange={(val) =>
              setFilter({ key: "category", value: val as string })
            }
          />
        </FilterBlock>
        <FilterBlock title="Prix" icon={<Icon name="OutlineEuro" />}>
          <div className="flex  gap-2">
            <NumberInput
              value={
                filters.priceMin
                  ? parseInt(filters.priceMin as string)
                  : undefined
              }
              label="Minimum"
              hideControls
              rightSection={<Icon name="OutlineEuro" />}
              onChange={(num) => onPriceChange({ num, type: "priceMin" })}
            />
            <NumberInput
              value={
                filters.priceMax
                  ? parseInt(filters.priceMax as string)
                  : undefined
              }
              label="Maximum"
              hideControls
              rightSection={<Icon name="OutlineEuro" />}
              onChange={(num) => onPriceChange({ num, type: "priceMax" })}
            />
          </div>
        </FilterBlock>
        <FilterBlock title="État" icon={<Icon name="OutlineHandThumbsUp" />}>
          <MultiSelectFilter
            data={conditionData}
            value={selectedConditions}
            typeKey="condition"
            placeholder="État"
          />
        </FilterBlock>
        <FilterBlock title="Taille" icon={<Icon name="Clothes" />}>
          <MultiSelectFilter
            data={
              filters.category === "clothes"
                ? clothesSizeData
                : clothesShoesData
            }
            value={sizeKeys}
            typeKey="size"
            placeholder={
              filters.category === "clothes"
                ? "Taille vêtement"
                : "Pointure chaussure"
            }
            disabled={!isClothesOrShoes}
            searchable
          />
        </FilterBlock>
        <FilterBlock title="Couleur" icon={<Icon name="OutlinePalette" />}>
          <MultiSelectFilter
            data={colorData}
            value={colorKeys}
            typeKey="color"
            placeholder="Couleur"
            customItem={ColorItem}
            disabled={!isClothesOrShoes}
            searchable
          />
        </FilterBlock>
        <DrawerFooter close={close} />
      </div>
    </>
  );
}

function FilterBlock({ children, title, icon: Icon }: FilterBlockProps) {
  return (
    <div className="flex flex-col gap-2" key={title}>
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
  placeholder,
  disabled = false,
  customItem: CustomItem,
  searchable = false,
}: {
  data: { value: string; label: string }[];
  value: string[];
  typeKey: MultiKeyFilterType;
  placeholder: string;
  disabled?: boolean;
  customItem?: React.FC<ItemProps>;
  searchable?: boolean;
}) {
  const { setMultiKeyFilter } = useShopFilters();
  const onChange = (val: Filter[]) => {
    setMultiKeyFilter({ keys: val, typeKey });
  };

  return (
    <MultiSelect
      value={value}
      onChange={onChange}
      size="md"
      placeholder={searchable ? "rechercher" : placeholder}
      data={data}
      itemComponent={CustomItem || undefined}
      disabled={disabled}
      searchable={searchable}
    />
  );
}

function DrawerFooter({ close }: { close: () => void }) {
  const router = useRouter();
  const { confirmFilters, resetFilters } = useShopFilters();
  return (
    <div className=" ">
      <div className="flex w-full justify-between gap-2 px-2">
        <Button onClick={resetFilters} size="md" variant="outline">
          Tout effacer
        </Button>
        <Button
          onClick={() => {
            confirmFilters({ router });
            close();
          }}
          size="md"
          radius={"sm"}
          color="secondary"
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
}
// eslint-disable-next-line react/display-name
const ColorItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ color, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <div className="flex items-center gap-2">
        <ColorSwatch color={color} size={16} />
        <Text>{label}</Text>
      </div>
    </div>
  )
);

import {
  Button,
  ColorSwatch,
  Divider,
  MultiSelect,
  NumberInput,
  Text,
  Tooltip,
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
import type { RefObject } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";
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
  const [isHoveringCategoryChange, setIsHoveringCategoryChange] =
    useState(false);

  //data
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

  //end of data
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
      <FilterBlock title="Catégorie" icon={<Icon name="OutlineList" />}>
        <CategorySelect
          animate={isHoveringCategoryChange}
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
            filters.category === "clothes" ? clothesSizeData : clothesShoesData
          }
          value={sizeKeys}
          typeKey="size"
          placeholder={
            filters.category === "clothes"
              ? "Taille vêtement"
              : "Pointure chaussure"
          }
          disabled={!isClothesOrShoes}
          disabledText={
            isClothesOrShoes
              ? ""
              : "Veuillez sélectionner la catégorie vêtements ou chaussures"
          }
          searchable
          onTooltipVisible={setIsHoveringCategoryChange}
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
          disabledText={
            isClothesOrShoes
              ? ""
              : "Veuillez sélectionner la catégorie vêtements ou chaussures"
          }
          searchable
          onTooltipVisible={setIsHoveringCategoryChange}
        />
      </FilterBlock>
      <DrawerFooter close={close} />
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
  disabledText,
  onTooltipVisible,
}: {
  data: { value: string; label: string }[];
  value: string[];
  typeKey: MultiKeyFilterType;
  placeholder: string;
  disabled?: boolean;
  customItem?: React.FC<ItemProps>;
  searchable?: boolean;
  disabledText?: string;
  onTooltipVisible?: (visible: boolean) => void;
}) {
  const { setMultiKeyFilter } = useShopFilters();
  const onChange = (val: Filter[]) => {
    setMultiKeyFilter({ keys: val, typeKey });
  };
  const [openTooltip, setOpenTooltip] = useState(false);

  useEffect(() => {
    if (onTooltipVisible) onTooltipVisible(openTooltip);
  }, [openTooltip]);

  return (
    <Tooltip
      disabled={!disabledText}
      label={disabledText}
      multiline
      offset={20}
      classNames={{ tooltip: "mr-3" }}
      opened={openTooltip}
    >
      <MultiSelect
        value={value}
        onChange={onChange}
        size="md"
        placeholder={searchable ? "rechercher" : placeholder}
        data={!disabled ? data : []}
        itemComponent={CustomItem || undefined}
        searchable={!disabled && searchable}
        onMouseOver={() => {
          if (disabledText) setOpenTooltip(true);
        }}
        onMouseLeave={() => {
          if (disabledText) setOpenTooltip(false);
        }}
        onClick={() => {
          if (disabledText) setOpenTooltip((prev) => !prev);
        }}
      />
    </Tooltip>
  );
}

function DrawerFooter({ close }: { close: () => void }) {
  const router = useRouter();
  const { confirmFilters, resetFilters } = useShopFilters();
  return (
    <div className="mt-auto flex w-full justify-center gap-2  sm:justify-between">
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

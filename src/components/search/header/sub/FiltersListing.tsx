import { Badge, Popover, Text, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "../../../../types/icons";
import useShops from "../../../../stores/useShops";
import { useDebouncedState } from "@mantine/hooks";

interface DropDownInterface {
  setFilterText: (text: string) => void;
}
const PriceDropdown = ({ setFilterText }: DropDownInterface) => {
  const router = useRouter();
  const { filters, setFilters, removeFilter } = useShops();
  const [firstLoadMin, setFirstLoadMin] = useState(true);
  const [firstLoadMax, setFirstLoadMax] = useState(true);
  const [priceMinDebounced, setPriceMinDebounced] = useDebouncedState(
    filters.priceMin,
    400
  );
  const [priceMaxDebounced, setPriceMaxDebounced] = useDebouncedState(
    filters.priceMax,
    400
  );
  const [priceMin, setPriceMin] = useState(filters.priceMin);
  const [priceMax, setPriceMax] = useState(filters.priceMax);

  const onChange = (type: string, value: string) => {
    console.log(type, value);
    if (!value) removeFilter({ key: type, router: router });
    if (type === "priceMin") {
      setPriceMinDebounced(value);
      setPriceMin(value);
    }
    if (type === "priceMax") {
      setPriceMaxDebounced(value);
      setPriceMax(value);
    }
    const hasMin = !!filters.priceMin;
    const hasMax = !!filters.priceMax;
    const hasValue = !!value;

    switch (type) {
      case "priceMin": {
        if (!hasValue) {
          const text = hasMax ? `min ${filters.priceMax as string}€` : "Prix";
          setFilterText(text);
        } else {
          const text = hasMax
            ? `${value}€ - ${filters.priceMax as string}€`
            : `min ${value}€`;
          setFilterText(text);
        }
        break;
      }

      case "priceMax": {
        if (!hasValue) {
          const text = hasMin ? `${filters.priceMin as string}€ max` : "Prix";
          setFilterText(text);
        } else {
          const text = hasMin
            ? `${filters.priceMin as string}€ - ${value}€`
            : `${value}€ max`;
          setFilterText(text);
        }
        break;
      }

      default:
        removeFilter({ key: type, router: router });
        setFilterText("Prix");
        break;
    }
  };

  useEffect(() => {
    if (firstLoadMin) return setFirstLoadMin(false);
    if (priceMinDebounced)
      setFilters({ key: "priceMin", value: priceMinDebounced, router: router });
  }, [priceMinDebounced]);

  useEffect(() => {
    if (firstLoadMax) return setFirstLoadMax(false);
    if (priceMaxDebounced)
      setFilters({ key: "priceMax", value: priceMaxDebounced, router: router });
  }, [priceMaxDebounced]);

  return (
    <div className="flex flex-row gap-2">
      <TextInput
        value={priceMin}
        onChange={(e) =>
          (/^\d+$/.test(e.target.value) || e.target.value === "") &&
          onChange("priceMin", e.target.value)
        }
        className="w-32"
        label="prix minimum"
      />
      <TextInput
        value={priceMax}
        onChange={(e) =>
          (/^\d+$/.test(e.target.value) || e.target.value === "") &&
          onChange("priceMax", e.target.value)
        }
        className="w-32"
        label="prix maximum"
      />
    </div>
  );
};

type FilterProps = {
  DropDown: ({ setFilterText }: DropDownInterface) => JSX.Element;
  text: string;
  keys: string[];
};

const Filter = ({ text, DropDown, keys }: FilterProps) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [filterText, setFilterText] = useState(text);
  useEffect(() => {
    let isNull = false;
    keys.forEach((key) => {
      if (router.query[key]) isNull = true;
    });
    if (!isNull) setFilterText(text);
  }, [router.query]);
  return (
    <Popover position="bottom" opened={opened} onChange={setOpened} shadow="md">
      <Popover.Target>
        <Badge
          onClick={() => setOpened((o) => !o)}
          className="cursor-pointer"
          styles={{ root: { textTransform: "capitalize" } }}
          variant={text === filterText ? "outline" : "gradient"}
          size="lg"
        >
          <div className="flex flex-row items-center gap-1">
            <Text
              color={text === filterText ? "black" : "white"}
              align="center"
            >
              {filterText}
            </Text>
            {opened ? (
              <ArrowUp
                color={text === filterText ? "black" : "white"}
                size={15}
              />
            ) : (
              <ArrowDown
                color={text === filterText ? "black" : "white"}
                size={15}
              />
            )}
          </div>
        </Badge>
      </Popover.Target>
      <Popover.Dropdown>
        <DropDown setFilterText={setFilterText} />
      </Popover.Dropdown>
    </Popover>
  );
};

const FiltersListing = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <Filter
        text={"Prix"}
        DropDown={PriceDropdown}
        keys={["priceMin", "priceMax"]}
      />
    </div>
  );
};
export default FiltersListing;

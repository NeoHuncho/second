import { Badge, Popover, Text, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "../../../../assets/icons";
import useShops from "../../../../stores/useShops";

interface DropDownInterface {
  setFilterText: (text: string) => void;
}
const PriceDropdown = ({ setFilterText }: DropDownInterface) => {
  const router = useRouter();
  const { filters, setFilters, removeFilter } = useShops();

  const onChange = (type: string, value: string) => {
    if (!value) {
      removeFilter(type);
      if (type === "priceMin" && filters.priceMax)
        return setFilterText(`min ${filters.priceMax}€`);
      if (type === "priceMax" && filters.priceMin)
        return setFilterText(`${filters.priceMin}€ max`);
      else return setFilterText("Prix");
    }

    if (type === "priceMin")
      if (!filters.priceMax) setFilterText(`min ${value}€`);
      else setFilterText(`${value}€ - ${filters.priceMax || ""}€`);
    if (type === "priceMax")
      if (!filters.priceMin) setFilterText(`${value}€ max`);
      else setFilterText(`${filters.priceMin || ""}€ - ${value}€`);

    setFilters({ key: type, value: value, router: router });
  };

  return (
    <div className="flex flex-row gap-2">
      <TextInput
        value={filters.priceMin}
        onChange={(e) =>
          (/^\d+$/.test(e.target.value) || e.target.value === "") &&
          onChange("priceMin", e.target.value)
        }
        className="w-32"
        label="prix minimum"
      />
      <TextInput
        value={filters.priceMax}
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

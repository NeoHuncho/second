import { Badge, Popover, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useShops from "../../../../stores/useShops";
import { ArrowDown, ArrowUp } from "../../../../types/icons";
import priceText from "../../../../utils/filterText/priceText";
import PriceDropdown from "./filter/Price";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
}

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
          variant={text === "Prix" ? "outline" : "gradient"}
          size="lg"
        >
          <div className="flex flex-row items-center gap-1">
            <Text color={text === "Prix" ? undefined : "white"} align="center">
              {filterText}
            </Text>
            {opened ? (
              <ArrowUp color={text === "Prix" ? "black" : "white"} size={15} />
            ) : (
              <ArrowDown
                color={text === "Prix" ? "black" : "white"}
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

import { Badge, Popover, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Icon } from "../../../../assets/icons";
import type { DropDownInterface } from "./FiltersListing";

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

            <Icon
              name={"FillCaretUp"}
              color={text === "Prix" ? undefined : "white"}
              size={15}
              style={{
                transform: opened ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
                marginTop: 2,
              }}
            />
          </div>
        </Badge>
      </Popover.Target>
      <Popover.Dropdown>
        <DropDown setFilterText={setFilterText} />
      </Popover.Dropdown>
    </Popover>
  );
};
export default Filter;

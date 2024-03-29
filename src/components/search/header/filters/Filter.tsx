import { Badge, Popover, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MultiKeyFilterTypes } from "../../../../../common/keys/keys";
import type { MultiKeyFilterType } from "../../../../../common/types/types";
import { Filter } from "../../../../../common/types/types";
import { Icon } from "../../../../assets/icons";
import type { DropDownInterface } from "./FiltersListing";

type FilterProps = {
  DropDown: ({ setFilterText }: DropDownInterface) => JSX.Element;
  text: string;
  keys: string[];
  multiValues?: [Filter, string][];
  initialText: string;
  typeKey?: string;
};

const useFilter = ({ text, keys }: { text: string; keys: string[] }) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [filterText, setFilterText] = useState(text);

  useEffect(() => {
    const multiKey = Object.keys(MultiKeyFilterTypes).find((key) =>
      key.includes(keys[0] || "")
    );
    if (multiKey) {
      if (!router.query[multiKey]) setFilterText(text);
      return;
    }
    if (keys.every((key) => !router.query[key])) setFilterText(text);
  }, [router.query]);

  useEffect(() => {
    if (filterText !== text) setFilterText(text);
  }, [text]);
  return { opened, setOpened, filterText, setFilterText };
};

const Filter = ({
  initialText,
  text,
  DropDown,
  keys,
  multiValues,
  typeKey,
}: FilterProps) => {
  const { opened, setOpened, filterText, setFilterText } = useFilter({
    text,
    keys,
  });

  return (
    <Popover position="bottom" opened={opened} onChange={setOpened} shadow="md">
      <Popover.Target>
        <Badge
          onClick={() => setOpened((o) => !o)}
          className="cursor-pointer"
          styles={{ root: { textTransform: "capitalize" } }}
          variant={text === initialText ? "outline" : "gradient"}
          size="lg"
        >
          <div className="flex flex-row items-center gap-1">
            <Text
              color={text === initialText ? undefined : "white"}
              align="center"
            >
              {filterText}
            </Text>
            <Icon
              name={"FillCaretUp"}
              color={text === initialText ? undefined : "white"}
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
        <DropDown
          setFilterText={setFilterText}
          multiValues={multiValues || []}
          typeKey={typeKey as MultiKeyFilterType}
        />
      </Popover.Dropdown>
    </Popover>
  );
};
export default Filter;

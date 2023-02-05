import type { MantineSize } from "@mantine/core";
import { Popover, Text, TextInput } from "@mantine/core";
import { getHotkeyHandler, useMediaQuery } from "@mantine/hooks";
import { SearchIcon } from "../../assets/icons";
import useCompletion from "../../hooks/completion/useCompletion";
import useCompletionSubmit from "../../hooks/completion/useCompletionSubmit";

type PropTypes = {
  size?: MantineSize;
  inputClassName?: string;
};

const SearchBar = ({ size = "md", inputClassName }: PropTypes) => {
  const smallBreakout = useMediaQuery("(min-width: 640px)");
  const { completionResults, setDebouncedSearchTerm, debouncedSearchTerm } =
    useCompletion();
  const { onSubmit, setSearchTerm } = useCompletionSubmit();
  return (
    <Popover
      width={
        size === "lg"
          ? smallBreakout
            ? "35%"
            : "80%"
          : smallBreakout
          ? "25%"
          : "60%"
      }
      opened={!!debouncedSearchTerm.length}
      position="bottom"
      withArrow
    >
      <Popover.Target>
        <TextInput
          placeholder="Rechercher"
          size={size}
          radius={"lg"}
          className={inputClassName || "w-full"}
          onKeyDown={getHotkeyHandler([["Enter", () => onSubmit()]])}
          rightSection={
            <SearchIcon
              onClick={onSubmit}
              className="mr-3 cursor-pointer"
              size={size === "lg" ? 32 : 25}
            />
          }
          rightSectionWidth={48}
          onChange={(e) => {
            setDebouncedSearchTerm(e.currentTarget.value);
            setSearchTerm(e.currentTarget.value);
          }}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <div className="flex flex-col gap-2">
          {completionResults.map((product, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Text
                className="cursor-pointer"
                onClick={() => {
                  onSubmit(product.value);
                }}
              >
                {product.value}
              </Text>
            </div>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

export default SearchBar;

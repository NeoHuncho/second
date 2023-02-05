import { Popover, Text, TextInput } from "@mantine/core";
import { getHotkeyHandler, useMediaQuery } from "@mantine/hooks";
import { SearchIcon } from "../../assets/icons";
import useCompletion from "../../hooks/completion/useCompletion";
import useCompletionSubmit from "../../hooks/completion/useCompletionSubmit";

const SearchBar = () => {
  const smallBreakout = useMediaQuery("(min-width: 640px)");
  const { completionResults, setDebouncedSearchTerm, debouncedSearchTerm } =
    useCompletion();
  const { onSubmit, setSearchTerm } = useCompletionSubmit();
  return (
    <Popover
      width={smallBreakout ? "35%" : "80%"}
      opened={!!debouncedSearchTerm.length}
      position="bottom"
      withArrow
    >
      <Popover.Target>
        <TextInput
          size="lg"
          radius={"lg"}
          className="w-5/6 sm:w-2/5"
          onKeyDown={getHotkeyHandler([["Enter", () => onSubmit()]])}
          rightSection={
            <SearchIcon
              onClick={onSubmit}
              className="mr-3 cursor-pointer"
              size={32}
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
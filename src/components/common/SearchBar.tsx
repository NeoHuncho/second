import type { MantineSize } from "@mantine/core";
import { Popover, Text, TextInput } from "@mantine/core";
import { getHotkeyHandler, useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Icon } from "../../assets/icons";
import useCompletion from "../../hooks/completion/useCompletion";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import useColorScheme from "../../hooks/ui/useColorTheme";
import Searchitem from "./SearchItem";

type PropTypes = {
  size?: MantineSize;
  inputClassName?: string;
};

const SearchBar = ({ size = "md", inputClassName }: PropTypes) => {
  const { isMobile } = useBreakpoints();

  const {
    completionResults,
    setDebouncedSearchTerm,
    onSubmit,
    setSearchTerm,
    searchTerm,
    focusHandlers,
    inputInFocus,
  } = useCompletion();

  return (
    <Popover
      width={
        size === "lg" ? (!isMobile ? "35%" : "80%") : !isMobile ? "25%" : "60%"
      }
      opened={!!completionResults.length && inputInFocus}
      position="bottom"
      withArrow
    >
      <Popover.Target>
        <TextInput
          onFocus={focusHandlers.open}
          onBlur={focusHandlers.close}
          placeholder="Rechercher"
          size={size}
          radius={"lg"}
          value={searchTerm}
          className={inputClassName || "w-full"}
          onKeyDown={getHotkeyHandler([["Enter", () => onSubmit()]])}
          rightSection={
            <Icon
              name="OutlineSearch"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => onSubmit()}
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
        <div className="flex flex-col ">
          {completionResults.map((product, index) => (
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            <Searchitem key={index} text={product.value} onSubmit={onSubmit} />
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

export default SearchBar;

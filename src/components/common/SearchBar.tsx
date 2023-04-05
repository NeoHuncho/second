import type { MantineSize } from "@mantine/core";
import { Slider } from "@mantine/core";
import { Popover, Text, TextInput } from "@mantine/core";
import { getHotkeyHandler, useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Icon } from "../../assets/icons";
import useCompletion from "../../hooks/completion/useCompletion";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import useColorScheme from "../../hooks/ui/useColorTheme";
import SearchItem from "./SearchItem";
import LocationOptions from "../searchBar/LocationOptions";
import DeliveryMethodSelect from "../searchBar/DeliveryMethodSelect";
import CategorySelect from "../searchBar/CategorySelect";
import useSearchParams from "../../stores/useSearchParams";

type PropTypes = {
  size?: MantineSize;

};

const SearchBar = ({ size = "md" }: PropTypes) => {
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
    <div className="w-full flex flex-col items-center px-4 ">
      <Popover
        width={
          size === "lg" ? (!isMobile ? "40vw" : "80%") : !isMobile ? "25%" : "60%"
        }
        opened={!!completionResults.length && inputInFocus}
        position="bottom"
      >
        <div className="w-full sm:grid sm:grid-cols-searchBar flex flex-col gap-2 items-center">
          <div className="flex w-full">
            {!isMobile && <CategorySelect size={size} />}
            <Popover.Target>
              <TextInput
                onFocus={focusHandlers.open}
                onBlur={focusHandlers.close}
                placeholder="Rechercher"
                size={size}
                radius="xs"
                value={searchTerm}
                style={{ width: isMobile ? '100%' : '-webkit-fill-available' }}

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
          </div>
          <div>
            <DeliveryMethodSelect size={size} />
            <LocationOptions />
          </div>
        </div>
        <Popover.Dropdown>
          <div className="flex flex-col ">
            {completionResults.map((product, index) => (
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              <SearchItem key={index} text={product.value} onSubmit={onSubmit} />
            ))}
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default SearchBar;

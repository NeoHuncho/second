import type { MantineSize } from "@mantine/core";
import { Loader } from "@mantine/core";
import { Popover, Text, TextInput } from "@mantine/core";
import { getHotkeyHandler, useMediaQuery } from "@mantine/hooks";
import { Icon } from "../../assets/icons";
import useCompletion from "../../hooks/completion/useCompletion";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import SearchItem from "./SearchItem";
import DeliveryMethodSelect from "../searchBar/DeliveryMethodSelect";
import CategorySelect from "../searchBar/CategorySelect";
import useShopFilters from "../../stores/state/useShopFilters";
import { useRouter } from "next/router";
type PropTypes = {
  size?: MantineSize;
};

const SearchBar = ({ size = "md" }: PropTypes) => {
  const router = useRouter();
  const { isMobile } = useBreakpoints();
  const { filters, setFilter, removeFilter } = useShopFilters();
  const {
    completionResults,
    setDebouncedSearchTerm,
    onSubmit,
    setSearchTerm,
    searchTerm,
    focusHandlers,
    inputInFocus,
    loading,
  } = useCompletion();

  const onChangeCategory = (value: string | null) => {
    if (!value) return removeFilter({ key: "category", router });
    setFilter({ key: "category", value: value, router });
  };

  return (
    <div className="flex w-full flex-col items-center px-4 ">
      <Popover
        width={
          size === "lg"
            ? !isMobile
              ? "40vw"
              : "80%"
            : !isMobile
            ? "25%"
            : "60%"
        }
        opened={!!completionResults.length && inputInFocus}
        position="bottom"
      >
        <div className="flex w-full flex-col items-center gap-4 sm:grid sm:grid-cols-searchBar sm:gap-2">
          <div className="flex w-full">
            {!isMobile && (
              <CategorySelect onChange={onChangeCategory} size={size} />
            )}
            <Popover.Target>
              <TextInput
                onFocus={focusHandlers.open}
                onBlur={focusHandlers.close}
                placeholder="Rechercher"
                size={size}
                radius="xs"
                value={searchTerm}
                style={{ width: isMobile ? "100%" : "-webkit-fill-available" }}
                onKeyDown={getHotkeyHandler([["Enter", () => onSubmit()]])}
                rightSection={
                  !loading ? (
                    <Icon
                      name="OutlineSearch"
                      // eslint-disable-next-line @typescript-eslint/no-misused-promises
                      onClick={() => onSubmit()}
                      className="mr-3 cursor-pointer"
                      size={size === "lg" ? 32 : 25}
                    />
                  ) : (
                    <Loader size={size === "lg" ? 32 : 25} />
                  )
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
            <div className="flex">
              {isMobile && (
                <CategorySelect onChange={onChangeCategory} size={size} />
              )}
              <DeliveryMethodSelect size={size} />
            </div>
          </div>
        </div>
        <Popover.Dropdown>
          <div className="flex flex-col ">
            {completionResults.map((product, index) => (
              <SearchItem
                key={index}
                text={product.value}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={onSubmit}
              />
            ))}
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default SearchBar;

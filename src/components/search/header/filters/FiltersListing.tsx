import { Button, Drawer, Title } from "@mantine/core";
import type {
  Filter as FilterKey,
  MultiKeyFilterType,
} from "../../../../../common/types/types";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "../../../../assets/icons";
import FilterDrawer from "./FilterDrawer";
import useShopFilters from "../../../../stores/state/useShopFilters";
import { useRouter } from "next/router";
import useColorTheme from "../../../../hooks/ui/useColorTheme";
import useBreakpoints from "../../../../hooks/ui/useBreakpoints";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: MultiKeyFilterType;
}

const FiltersListing = () => {
  const router = useRouter();
  const { isLight } = useColorTheme();
  const { isMobile } = useBreakpoints();
  const { confirmFilters, filters } = useShopFilters();
  const [opened, { open, close }] = useDisclosure(false);
  const onClose = () => {
    confirmFilters({ router });
    close();
  };
  const filtersLength = Object.keys(filters).length;
  return (
    <>
      <Drawer
        title={
          <div className="w-full">
            <Title order={5} className="pl-2">
              Filtrer votre recherche
            </Title>
          </div>
        }
        opened={opened}
        onClose={onClose}
        position="right"
        size={isMobile ? "xs" : "sm"}
        classNames={{ body: "mt-2 px-3 flex flex-col justify-between" }}
        styles={{ body: { minHeight: "calc(100vh - 70px)" } }}
      >
        <FilterDrawer close={close} />
      </Drawer>
      <Button
        onClick={open}
        className="sm:h-12"
        color="secondary"
        variant={filtersLength > 0 ? "filled" : "outline"}
        leftIcon={
          <Icon
            name="Adjustments"
            size={20}
            color={filtersLength > 0 ? "white" : isLight ? "black" : "white"}
          />
        }
      >
        {`Filtres ${filtersLength > 0 ? `(${filtersLength})` : ""}`}
      </Button>
    </>
  );
};
export default FiltersListing;

import { Button, Divider, Drawer, Title } from "@mantine/core";
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

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: MultiKeyFilterType;
}

const FiltersListing = () => {
  const router = useRouter();
  const { isLight } = useColorTheme();
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
        classNames={{ drawer: "w-80 p-2" }}
      >
        <Divider className="mb-8 -mt-3" size="xs" />
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

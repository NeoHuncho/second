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

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: MultiKeyFilterType;
}

const FiltersListing = () => {
  const router = useRouter();
  const { confirmFilters } = useShopFilters();
  const [opened, { open, close }] = useDisclosure(false);
  const onClose = () => {
    confirmFilters({ router });
    close();
  };
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
        variant="outline"
        leftIcon={<Icon name="Adjustments" color="#2a9494" size={20} />}
      >
        Filtres
      </Button>
    </>
  );
};
export default FiltersListing;

import { Button, Divider, Drawer, Title } from "@mantine/core";
import type {
  Filter as FilterKey,
  MultiKeyFilterType,
} from "../../../../../common/types/types";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "../../../../assets/icons";
import FilterDrawer from "./FilterDrawer";

export interface DropDownInterface {
  setFilterText: (text: string) => void;
  multiValues?: [FilterKey, string][];
  typeKey?: MultiKeyFilterType;
}

const FiltersListing = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
        onClose={close}
        position="right"
        classNames={{ drawer: "w-80 p-2" }}
      >
        <Divider className="mb-8 -mt-3" size="xs" />
        <FilterDrawer />
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

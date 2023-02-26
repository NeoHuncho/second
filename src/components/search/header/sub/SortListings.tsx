import { Button, Menu, Text } from "@mantine/core";

import { useRouter } from "next/router";
import { useState } from "react";
import defaultSorts from "../../../../static/defaultSorts";

import useShops from "../../../../stores/useShops";
import type { Sorts } from "../../../../types/types";

const SortListings = () => {
  const router = useRouter();
  const { sort, setSort } = useShops();
  const [menuOpened, setMenuOpened] = useState(false);
  const handleSortChange = (sort: Sorts) => {
    setSort(sort, router);
    setMenuOpened(false);
  };
  return (
    <Menu
      opened={menuOpened}
      onChange={setMenuOpened}
      shadow={"lg"}
      width={176}
    >
      <Menu.Target>
        <Button className="h-12 w-44" color="secondary" variant="outline">
          <div className="align-center flex flex-col justify-center">
            <Text weight={300} color="black" align="center">
              Trier par
            </Text>
            <Text align="center" weight={700}>
              {defaultSorts[sort]}
            </Text>
          </div>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <div className="flex flex-col gap-2">
          <Button
            color="black"
            onClick={() => handleSortChange("price_asc")}
            variant="outline"
          >
            Prix croissant
          </Button>
          <Button
            color="black"
            onClick={() => handleSortChange("price_desc")}
            variant="outline"
          >
            Prix décroissant
          </Button>
          <Button
            onClick={() => handleSortChange("date_desc")}
            color="black"
            variant="outline"
          >
            Date récente
          </Button>
          <Button
            onClick={() => handleSortChange("date_asc")}
            color="black"
            variant="outline"
          >
            Date ancienne
          </Button>
          <Button
            onClick={() => handleSortChange("recommended")}
            color="black"
            variant="outline"
          >
            Pertinence
          </Button>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default SortListings;

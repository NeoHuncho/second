import type { MantineSize } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { Popover } from "@mantine/core";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import type { DeliveryMethod } from "../../../common/types/types";
import { deliveryMethods } from "../../../common/keys/keys";
import { useEffect, useState } from "react";
import useDeliveryParams from "../../stores/useLocalStorage";
import LocationOptions from "./LocationOptions";
import { Icon } from "../../assets/icons";

type Props = {
  size: MantineSize;
};
export default function DeliveryMethodSelect({ size }: Props) {
  const { deliveryMethod, setDeliveryMethod, address, locationRange } =
    useDeliveryParams();
  const [data, setData] = useState<{ label: string; value: DeliveryMethod }[]>(
    []
  );
  const [openedOptions, setOpenedOptions] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setData(
      Object.entries(deliveryMethods).map(([key, value]) => ({
        label: value,
        value: key as DeliveryMethod,
      }))
    );
  }, []);

  useEffect(() => {
    if (address)
      setData((data) =>
        data.map((item) => {
          if (item.value !== "location") return item;
          return {
            ...item,
            label: `${address} (${locationRange}km)📍`,
          };
        })
      );
  }, [address]);

  useEffect(() => {
    if (address)
      setData((data) =>
        data.map((item) => {
          if (item.value !== "location") return item;
          return {
            ...item,
            label: `${address} (${locationRange}km) 📍`,
          };
        })
      );
  }, [locationRange]);

  return (
    <div className="flex  items-center gap-1">
      <Select
        className="ml-2 w-full"
        size={size}
        radius={"sm"}
        data={data}
        value={deliveryMethod}
        onChange={(value) => setDeliveryMethod(value as DeliveryMethod)}
        placeholder="Choisissez une méthode de livraison"
        onDropdownOpen={() => setDropdownOpen(true)}
        onDropdownClose={() => setDropdownOpen(false)}
      />
      {deliveryMethod !== "delivery" && (
        <Popover
          opened={openedOptions || (!address && !dropdownOpen)}
          onChange={setOpenedOptions}
        >
          <Popover.Target>
            {address ? (
              <ActionIcon
                variant="filled"
                onClick={() => setOpenedOptions((o) => !o)}
              >
                <Icon color="white" size={20} name="Adjustments" />
              </ActionIcon>
            ) : (
              <div />
            )}
          </Popover.Target>
          <Popover.Dropdown>
            <LocationOptions setOpened={setOpenedOptions} address={address} />
          </Popover.Dropdown>
        </Popover>
      )}
    </div>
  );
}

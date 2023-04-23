import { ActionIcon, Popover, Text, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import type { placeAutocomplete } from "../../requests/backend";
import { getPlaceLocation } from "../../requests/backend";
import { getPlaceAutocomplete } from "../../requests/backend";
import { useDebouncedState } from "@mantine/hooks";
import useDeliveryParams from "../../stores/storage/usePersistentSearchParams";
import { Icon } from "../../assets/icons";

const AddressDropdown = () => {
  const { setAddressCoords, address, setAddress } = useDeliveryParams();
  const [enteredAddress, setEnteredAddress] = useState(address);
  const [debouncedAddress, setDebouncedAddress] = useDebouncedState(
    enteredAddress,
    500
  );
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [hasChangedInput, setHasChangedInput] = useState<boolean>(false);
  const [addressList, setAddressList] = useState<placeAutocomplete[]>([]);

  useEffect(() => {
    if (!enteredAddress.length || !hasChangedInput) return;
    void getPlaceAutocomplete(enteredAddress).then((res) => {
      setAddressList(res.data);
      setPopoverOpen(!!enteredAddress.length);
    });
  }, [debouncedAddress]);

  useEffect(() => {
    if (address.length) setEnteredAddress(address);
  }, [address]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAddress(event.currentTarget.value);
    setDebouncedAddress(event.currentTarget.value);
    setHasChangedInput(true);
  };

  const onAddressClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    const address = addressList.find(
      (address) => address.title === target.innerText
    );
    if (address) {
      setAddress(address.title);
      setEnteredAddress(address.title);
      setPopoverOpen(false);
      void getPlaceLocation(address.placeId).then((res) => {
        setAddressCoords(res.data);
      });
    }
  };

  return (
    <Popover opened={popoverOpen} width={200}>
      <Popover.Target>
        <TextInput
          label="Votre ville"
          value={enteredAddress}
          onChange={onInputChange}
          placeholder="Votre ville"
          className="w-52"
        />
      </Popover.Target>
      {!!addressList.length && !!enteredAddress && (
        <Popover.Dropdown>
          <div className="flex flex-col gap-1">
            {addressList.map((address) => (
              <div
                key={address.placeId}
                onClick={onAddressClick}
                className="cursor-pointer"
              >
                <Text className=" font-medium">{address.title}</Text>
              </div>
            ))}
          </div>
        </Popover.Dropdown>
      )}
    </Popover>
  );
};
export default AddressDropdown;

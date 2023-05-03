import { useLocalStorage } from "@mantine/hooks";
import type { DeliveryMethod } from "../../../common/types/types";
import { useEffect, useState } from "react";
import useSearchParams from "../state/useSearchParams";

type AddressCoords = {
  lat: number;
  lng: number;
};

const usePersistentSearchParams = () => {
  const { setDeliveryParamChanged } = useSearchParams();
  const [locationRange, setLocationRange] = useLocalStorage({
    key: "locationRange",
    defaultValue: 0,
  });
  const [deliveryMethod, setDeliveryMethod] = useLocalStorage<DeliveryMethod>({
    key: "deliveryMethod",
    defaultValue: "delivery",
  });
  const [address, setAddress] = useLocalStorage({
    key: "address",
    defaultValue: "",
  });
  const [addressCoords, setAddressCoords] = useLocalStorage<AddressCoords>({
    key: "addressCoords",
    defaultValue: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    setDeliveryParamChanged(true);
  }, [locationRange, deliveryMethod, address, addressCoords]);

  return {
    locationRange,
    setLocationRange,
    deliveryMethod,
    setDeliveryMethod,
    address,
    setAddress,
    addressCoords,
    setAddressCoords,
  };
};
export default usePersistentSearchParams;

import { useLocalStorage as localStorageHook } from "@mantine/hooks";
import type { DeliveryMethod } from "../../common/types/types";
import { useEffect, useState } from "react";
import useSearchParams from "./state/useSearchParams";

type AddressCoords = {
  lat: number;
  lng: number;
};

const useLocalStorage = () => {
  const { setDeliveryParamChanged } = useSearchParams();
  const [theme, setTheme] = localStorageHook({
    key: "color-scheme",
  });
  const [locationRange, setLocationRange] = localStorageHook({
    key: "locationRange",
    defaultValue: 0,
  });
  const [deliveryMethod, setDeliveryMethod] = localStorageHook<DeliveryMethod>({
    key: "deliveryMethod",
    defaultValue: "delivery",
  });
  const [address, setAddress] = localStorageHook({
    key: "address",
    defaultValue: "",
  });
  const [addressCoords, setAddressCoords] = localStorageHook<AddressCoords>({
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
    theme,
    setTheme,
  };
};
export default useLocalStorage;

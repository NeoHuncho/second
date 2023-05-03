import { create } from "zustand";

type StoreType = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  deliveryParamChanged: boolean;
  setDeliveryParamChanged: (deliveryParamChanged: boolean) => void;
};

const useSearchParams = create<StoreType>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  deliveryParamChanged: false,
  setDeliveryParamChanged: (deliveryParamChanged: boolean) =>
    set({ deliveryParamChanged }),
}));

export default useSearchParams;

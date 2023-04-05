import { create } from "zustand";
import type { Category, DeliveryMethod } from "../../common/types/types";

type StoreType = {
  searchTerm: string;
  deliveryMethod: DeliveryMethod;
  category: Category |'all';
  addressConfirmed: boolean;
  dropdownOpen: boolean;
  setSearchTerm: (searchTerm: string) => void;
  setDeliveryMethod: (deliveryMethod: DeliveryMethod) => void;
  setCategory: (category: Category |'all') => void;
  setAddressConfirmed: (addressConfirmed: boolean) => void;
  setDropdownOpen: (dropdownOpen: boolean) => void;
};

const useSearchParams = create<StoreType>((set) => ({
  searchTerm: "",
  deliveryMethod: "delivery",
  category: "all",
  addressConfirmed: false,
  dropdownOpen: false,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setDeliveryMethod: (deliveryMethod) => set({ deliveryMethod }),
  setCategory: (category) => set({ category }),
  setAddressConfirmed: (addressConfirmed) => set({ addressConfirmed }),
  setDropdownOpen: (dropdownOpen) => set({ dropdownOpen }),
}));

export default useSearchParams;

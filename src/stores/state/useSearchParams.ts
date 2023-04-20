import { create } from "zustand";

type StoreType = {
  searchTerm: string;
  dropdownOpen: boolean;
  hasClickedDeliverySelect: boolean;
  setSearchTerm: (searchTerm: string) => void;
  setDropdownOpen: (dropdownOpen: boolean) => void;
  setHasClickedDeliverySelect: (hasClickedDeliverySelect: boolean) => void;
};

const useSearchParams = create<StoreType>((set) => ({
  searchTerm: "",
  dropdownOpen: false,
  hasClickedDeliverySelect: false,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setDropdownOpen: (dropdownOpen) => set({ dropdownOpen }),
  setHasClickedDeliverySelect: (hasClickedDeliverySelect) => set({ hasClickedDeliverySelect})
}));

export default useSearchParams;

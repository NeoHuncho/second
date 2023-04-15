import { create } from "zustand";
import type { Category } from "../../../common/types/types";

type StoreType = {
  searchTerm: string;
  category: Category |'all';
  dropdownOpen: boolean;
  hasClickedDeliverySelect: boolean;
  setSearchTerm: (searchTerm: string) => void;
  setCategory: (category: Category |'all') => void;
  setDropdownOpen: (dropdownOpen: boolean) => void;
  setHasClickedDeliverySelect: (hasClickedDeliverySelect: boolean) => void;
};

const useSearchParams = create<StoreType>((set) => ({
  searchTerm: "",
  category: "all",
  dropdownOpen: false,
  hasClickedDeliverySelect: false,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setCategory: (category) => set({ category }),
  setDropdownOpen: (dropdownOpen) => set({ dropdownOpen }),
  setHasClickedDeliverySelect: (hasClickedDeliverySelect) => set({ hasClickedDeliverySelect})
}));

export default useSearchParams;

import { create } from "zustand";

type StoreType = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const useSearchParams = create<StoreType>((set) => ({
  searchTerm: "",
  dropdownOpen: false,
  hasClickedDeliverySelect: false,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
}));

export default useSearchParams;

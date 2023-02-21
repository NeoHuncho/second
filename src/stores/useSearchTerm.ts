//create a zustand store which stores a search term (string) and has a action to set it

type StoreType = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

import { create } from "zustand";
const useSearchTerm = create<StoreType>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
}));

export default useSearchTerm;

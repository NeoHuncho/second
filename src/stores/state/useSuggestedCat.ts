type StoreType = {
  suggestedCat: string;
  setSuggestedCat: (suggestedCat: string) => void;
};

import { create } from "zustand";
const useSuggestedCat = create<StoreType>((set) => ({
  suggestedCat: "",
  setSuggestedCat: (suggestedCat: string) => set({ suggestedCat }),
}));

export default useSuggestedCat;

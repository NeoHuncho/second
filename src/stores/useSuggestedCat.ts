type StoreType = {
  suggestedCat: string;
  suggest: boolean;
  setSuggestedCat: (suggestedCat: string) => void;
  setSuggest: (suggest: boolean) => void;
};

import { create } from "zustand";
const useSuggestedCat = create<StoreType>((set) => ({
  suggestedCat: "",
  suggest: false,
  setSuggestedCat: (suggestedCat: string) => set({ suggestedCat }),
  setSuggest: (suggest: boolean) => set({ suggest }),
}));

export default useSuggestedCat;

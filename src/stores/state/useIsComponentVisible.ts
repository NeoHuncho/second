import { create } from "zustand";

type StoreType = {
  isShopTabsVisible: boolean;
  setIsShopTabsVisible: (isVisible: boolean) => void;
};

const useIsComponentVisible = create<StoreType>((set) => ({
  isShopTabsVisible: false,
  setIsShopTabsVisible: (isVisible) => set({ isShopTabsVisible: isVisible }),
}));

export default useIsComponentVisible;

import { create } from "zustand";
import type { Category, DeliveryMethod } from "../../common/types/types";

type StoreType = {
  searchTerm: string;
  deliveryMethod: DeliveryMethod;
  category: Category |'all';
  setSearchTerm: (searchTerm: string) => void;
  setDeliveryMethod: (deliveryMethod: DeliveryMethod) => void;
  setCategory: (category: Category |'all') => void;
};

const useSearchParams = create<StoreType>((set) => ({
  searchTerm: "",
  deliveryMethod: "delivery",
  category: "all",
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setDeliveryMethod: (deliveryMethod) => set({ deliveryMethod }),
  setCategory: (category) => set({ category }),
}));

export default useSearchParams;

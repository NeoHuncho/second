import type { Shop, Shops } from "../../../types/types";
import { create } from "zustand";
import axios from "axios";
import type { ShopRes } from "../../../types/api/shopsRes";
import formatStoreUrl from "../../../utils/formatStoreUrl";
import { defaultShops } from "../../../static/defaultShops";

type ShopState = {
  shops: {
    Vinted: Shop;
    Leboncoin: Shop;
  };
  updateListings: (shop: Shops) => Promise<void>;
  resetShops: () => void;
};

const useShops = create<ShopState>()((set, get) => ({
  shops: {
    Leboncoin: defaultShops.Leboncoin,
    Vinted: defaultShops.Vinted,
  },
  updateListings: async (shop: Shops) => {
    const { listings, page, name } = get().shops[shop];
    const url = formatStoreUrl({ store: name, page: page + 1 });
    if (!url) return;
    if (page + 1 > 1) {
      set((state) => ({
        ...state,
        shops: {
          ...state.shops,
          [shop]: {
            ...state.shops[shop],
            loadingNextPage: true,
          },
        },
      }));
    }
    const response = await axios.get<ShopRes>(url);
    if (!listings.length && !response.data.listings.length)
      return set((state) => ({
        ...state,
        shops: {
          ...state.shops,
          [shop]: {
            ...state.shops[shop],
            status: "no_results",
          },
        },
      }));

    const newListings = [...listings, ...response.data.listings];
    set((state) => ({
      ...state,
      shops: {
        ...state.shops,
        [shop]: {
          ...state.shops[shop],
          listings: newListings,
          page: page + 1,
          status: "success",
          hasFetchedAll: response.data.listings.length === 0,
          loadingNextPage: false,
        },
      },
    }));
  },
  resetShops: () => {
    set((state) => ({
      ...state,
      shops: {
        Leboncoin: defaultShops.Leboncoin,
        Vinted: defaultShops.Vinted,
      },
    }));
  },
}));

export default useShops;

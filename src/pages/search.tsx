import HeaderSearch from "../components/search/header/HeaderSearch";
import useSearch from "../hooks/search/useSearch";
import useShops from "../stores/state/useShops";
import ShopTabs from "../components/search/header/shopTabs/ShopTabs";
import ListingsShop from "../components/search/listingsShop/ListingShop";
import useShopFilters from "../stores/state/useShopFilters";
import { useEffect } from "react";
import { filter } from "cheerio/lib/api/traversing";
import {
  clothingShopOrder,
  defaultShopOrder,
  shoesShopOrder,
} from "../static/storeOrder";
import type { ShopName } from "../../common/types/types";

const Search = () => {
  useSearch();
  const {
    shops,
    activeShop,
    lastSearched,
    shopOrder,
    setShopOrder,
    setActiveShop,
  } = useShops();
  const { setFiltersFromQuery } = useShopFilters();
  const { filters } = useShopFilters();
  useEffect(() => {
    setFiltersFromQuery({ query: window.location.search });
  }, []);

  useEffect(() => {
    if (!filters.category || filters.category === "all") {
      setShopOrder(defaultShopOrder);
      setActiveShop(defaultShopOrder[0] as ShopName);
    }
    if (filters.category === "clothes") {
      setShopOrder(clothingShopOrder);
      setActiveShop(clothingShopOrder[0] as ShopName);
    }
    if (filters.category === "shoes") {
      setShopOrder(shoesShopOrder);
      setActiveShop(shoesShopOrder[0] as ShopName);
    }
  }, [filters.category]);

  return lastSearched ? (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      <div>
        <div className="mb-3">
          <HeaderSearch />
        </div>
        <ShopTabs
          shops={[
            ...Object.values(shops).sort(
              (shopA, shopB) =>
                shopOrder.indexOf(shopA.name) - shopOrder.indexOf(shopB.name)
            ),
          ]}
        />
        <div className="mt-5 flex flex-col">
          <ListingsShop shop={shops[activeShop]} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Search;

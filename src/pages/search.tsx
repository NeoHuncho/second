import HeaderSearch from "../components/search/header/HeaderSearch";
import useSearch from "../hooks/search/useSearch";
import useShops from "../stores/state/useShops";
import ShopTabs from "../components/search/header/shopTabs/ShopTabs";
import ListingsShop from "../components/search/listingsShop/ListingShop";
import useShopFilters from "../stores/state/useShopFilters";
import { useEffect } from "react";

const Search = () => {
  useSearch();
  const { shops, activeShop, lastSearched } = useShops();
  const { setFiltersFromQuery } = useShopFilters();
  useEffect(() => {
    setFiltersFromQuery({ query: window.location.search });
  }, []);

  return lastSearched ? (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      <div>
        <div className="mb-3">
          <HeaderSearch />
        </div>
        <ShopTabs />
        <div className="mt-5 flex flex-col">
          <ListingsShop  shop={shops[activeShop]} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Search;

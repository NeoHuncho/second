import HeaderSearch from "../components/search/header/HeaderSearch";
import useSearch from "../hooks/search/useSearch";
import useShops from "../stores/state/useShops";
import ShopTabs from "../components/search/header/shopTabs/ShopTabs";
import useLocalStorage from "../stores/useLocalStorage";
import ListingsShop from "../components/search/listingsShop/ListingShop";

const Search = () => {
  useSearch();
  const { shops, activeShop, lastSearched } = useShops();

  // TODO this is not needed but when removed the page loops the shop loading
  useLocalStorage();
  return lastSearched ? (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      <div>
        <div className="mb-3">
          <HeaderSearch />
        </div>
        <ShopTabs shops={[...Object.values(shops)]} />
        <div className="mt-5 flex flex-col">
          <ListingsShop shop={shops[activeShop]} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Search;

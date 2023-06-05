import HeaderSearch from "../components/search/header/HeaderSearch";
import useSearch from "../hooks/search/useSearch";
import useShops from "../stores/state/useShops";
import ShopTabs from "../components/search/header/shopTabs/ShopTabs";
import useLocalStorage from "../stores/useLocalStorage";
import ListingsShop from "../components/search/listingsShop/ListingShop";

const Search = () => {
  useSearch();
  const { shops, activeShop } = useShops();
  // TODO this is not needed but when removed the page loops the shop loading
  useLocalStorage();

  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      {window.location.search && (
        <div>
          <div className="mb-3">
            <HeaderSearch />
          </div>
          <ShopTabs shops={[...Object.values(shops)]} />
          <div className="flex flex-col mt-5">
            <ListingsShop shop={shops[activeShop]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

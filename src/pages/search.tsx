import LoadingShops from "../components/search/LoadingShops";

import ListingShop from "../components/search/listingsShop/ListingShop";
import useShops from "../stores/useShops";
import HeaderSearch from "../components/search/header/HeaderSearch";
import useSearch from "../hooks/search/useSearch";

const Search = () => {
  const shops = useShops();
  //! KEEP THIS
  useSearch();
  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      <HeaderSearch />
      <LoadingShops values={[...Object.values(shops.shops)]} />
      <div className="flex flex-col gap-6 ">
        {Object.values(shops.shops).map((shop) => (
          <ListingShop key={shop.name} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default Search;

import LoadingShops from "../components/search/LoadingShops";

import ListingShop from "../components/search/listingsShop/ListingShop";
import HeaderSearch from "../components/search/header/HeaderSearch";
import useSearch from "../hooks/search/useSearch";
import useValidShops from "../hooks/search/useValidShops";
import useShops from "../stores/state/useShops";

const Search = () => {
  const { validShopsValues: validShops, } = useValidShops()
  useSearch();
  const { shops, filters } = useShops()
  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      <div className="mb-3">
        <HeaderSearch />
      </div>
      <LoadingShops values={[...Object.values(shops)]} />
      <div className="flex flex-col gap-6 ">
        {Object.values(validShops).map((shop) => (
          <ListingShop key={shop.name} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default Search;

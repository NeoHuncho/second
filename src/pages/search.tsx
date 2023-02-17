import LoadingShops from "../components/listings/LoadingShops";
import SearchTerm from "../components/listings/SearchedTerm";
import ListingShop from "../components/listings/listingsShop/ListingShop";
import useShops from "../hooks/search/shops/useShops";
import useSearch from "../hooks/search/useSearch";

const Search = () => {
  const shops = useShops();
  const search = useSearch();

  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2 ">
      <SearchTerm />
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

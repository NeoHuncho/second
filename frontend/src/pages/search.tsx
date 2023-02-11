import LoadingShops from "../components/listings/LoadingShops";
import SearchTerm from "../components/listings/SearchedTerm";
import ListingShop from "../components/listings/listingsShop/ListingShop";
import useShops from "../hooks/search/shops/useShops";

const Search = () => {
  const shops = useShops();

  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-4 sm:gap-2">
      <SearchTerm />
      <LoadingShops values={[...Object.values(shops)]} />
      {Object.values(shops).map((shop) => (
        <ListingShop key={shop.name} shop={shop} />
      ))}
    </div>
  );
};

export default Search;

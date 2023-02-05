import LoadingShops from "../components/search/LoadingShops";
import SearchTerm from "../components/search/SearchedTerm";
import useLeboncoin from "../hooks/search/shops/useLeboncoin";

const Search = () => {
  const loadingStates = {
    leboncoin: true,
    vinted: true,
  };
  const { currentShop } = useLeboncoin();

  return (
    <div className="flex flex-col gap-2">
      <SearchTerm />
      <LoadingShops loadingStates={loadingStates} />
    </div>
  );
};

export default Search;

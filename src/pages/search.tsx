import LoadingShops from "../components/search/LoadingShops";

const Search = () => {
  const loadingStates = {
    leboncoin: true,
    vinted: true,
  };
  return (
    <div>
      <LoadingShops loadingStates={loadingStates} />
    </div>
  );
};

export default Search;

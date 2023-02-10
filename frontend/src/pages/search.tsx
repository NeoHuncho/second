import { useState } from "react";
import LoadingShops from "../components/search/LoadingShops";
import SearchTerm from "../components/search/SearchedTerm";
import ListingShop from "../components/search/listingsShop/ListingShop";
import useShops from "../hooks/search/shops/useShops";

const Search = () => {
  const shops = useShops();

  return (
    <div className="flex flex-col gap-2">
      <SearchTerm />
      <LoadingShops values={[...Object.values(shops)]} />
      {Object.values(shops).map((shop) => (
        <ListingShop key={shop.name} shop={shop} />
      ))}
    </div>
  );
};

export default Search;

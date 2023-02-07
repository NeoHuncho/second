import { useState } from "react";
import LoadingShops from "../components/search/LoadingShops";
import SearchTerm from "../components/search/SearchedTerm";
import useLeboncoin from "../hooks/search/shops/useLeboncoin";
import useShops from "../hooks/search/shops/useShops";
import useSearch from "../hooks/search/useSearch";
import type { Shop } from "../types/types";

const Search = () => {
  const { leboncoin, vinted } = useShops();
  return (
    <div className="flex flex-col gap-2">
      <SearchTerm />
      <LoadingShops values={[leboncoin, vinted]} />
    </div>
  );
};

export default Search;

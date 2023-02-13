import { useEffect } from "react";
import useSearch from "../useSearch";
import useLeboncoin from "./useLeboncoin";
import useVinted from "./useVinted";

const useShops = () => {
  const { searchTerm } = useSearch();
  const { currentShop: leboncoin } = useLeboncoin();
  const { currentShop: vinted } = useVinted();

  return { leboncoin, vinted };
};

export default useShops;

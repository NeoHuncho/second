import { useRouter } from "next/router";
import { useEffect } from "react";
import useShops from "../../stores/state/useShops";
import type { ShopName } from "../../../common/types/types";
import { Filters } from "../../../common/keys/keys";

import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useSearchParams from "../../stores/storage/usePersistentSearchParams";
import type { ParsedUrlQuery} from "querystring";
import { parse } from "querystring";
import useValidShops from "./useValidShops";


const useSearch = () => {
  const router = useRouter();
  const {
    updateListings,
    resetShops,
    setSort,
    resetFilters,
    setFilter,
    shops
  } = useShops();
  const { suggestedCat, suggest, setSuggestedCat } = useSuggestedCat();
  const {category,deliveryMethod,locationRange,addressCoords,deliveryParamsChanged,address}= useSearchParams()
  const {validShopKeys: validShops}= useValidShops()
  useEffect(() => {
    if(!deliveryMethod) return;
    if (!window.location.search.includes("sort")) {
      setSort("recommended", router);
      return;
    }
   
    if (
      Object.keys(Filters).every(
        (key) => window.location.search.includes(key) === false
      )
    )
    resetFilters();
  
    if (suggestedCat && !category) {
      if (suggest) return;
      setFilter({
        key: "category",
        value: suggestedCat,
      });

      setSuggestedCat("");
      return;
    }
    
    if (router.query.query) updateShops();
    
  }, [router.query]);

  useEffect(() => {
  
    const routerUrlQuery:Record<string,string|number>={}
    if(!router.query.query) return;
    if(category)
    routerUrlQuery[`category`]=category
      if(deliveryMethod)
    routerUrlQuery[`deliveryMethod`]=deliveryMethod
      if(addressCoords.lat && deliveryMethod!=='delivery')
    routerUrlQuery[`lat`]=addressCoords.lat
      if(addressCoords.lng && deliveryMethod!=='delivery' )
    routerUrlQuery[`lng`]=addressCoords.lng
      if(locationRange && deliveryMethod!=='delivery' )
    routerUrlQuery[`locationRange`]=locationRange
    if(address && deliveryMethod!=='delivery' )
    routerUrlQuery[`city`]=address
   function convertSearchToParsedUrlQuery(): ParsedUrlQuery {
    const search = window.location.search;
    const parsedSearch = parse(search.replace("?", ""));
    return parsedSearch;
}
    void  router.push({
      pathname: router.pathname,
      query: {
        ...convertSearchToParsedUrlQuery(),
        ...routerUrlQuery,
      }
    });
    
  }, [router.query.query,deliveryParamsChanged]);

  
  const updateShops = () => {
    resetShops();
    
    validShops.forEach((shop) => {
      void updateListings(shop as ShopName);
    });
  };

  
  

};
export default useSearch;

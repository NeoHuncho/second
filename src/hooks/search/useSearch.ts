import { useRouter } from "next/router";
import { useEffect } from "react";
import useShops from "../../stores/state/useShops";
import type { ShopName } from "../../../common/types/types";
import { Filters } from "../../../common/keys/keys";

import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useSearchParams from "../../stores/storage/usePersistentSearchParams";
import type { ParsedUrlQuery} from "querystring";
import { parse } from "querystring";


const useSearch = () => {
  const router = useRouter();
  const {
    updateListings,
    shops,
    resetShops,
    setSort,
    resetFilters,
    setFilter,
  } = useShops();
  const { suggestedCat, suggest, setSuggestedCat } = useSuggestedCat();
  const {category,deliveryMethod,locationRange,addressCoords,deliveryParamsChanged}= useSearchParams()
   
  useEffect(() => {
    if(!deliveryMethod) return;
    if (!window.location.search.includes("sort")) {
      setSort("recommended", router);
      return;
    }
    console.log(1,  Object.keys(Filters).every(
        (key) => window.location.search.includes(key) === false
      ))
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
    console.log(3, router?.query  ?.query)
    if (router.query.query) updateShops();
    console.log(4, window.location.search)
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
    console.log(-1,router.query)
  }, [router.query.query,deliveryParamsChanged]);

  
  const updateShops = () => {
    resetShops();
    Object.keys(shops).forEach((shop) => {
      void updateListings(shop as ShopName);
    });
  };

  
  

};
export default useSearch;

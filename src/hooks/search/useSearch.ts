import { useRouter } from "next/router";
import { useEffect } from "react";
import useShops from "../../stores/state/useShops";
import type { ShopName } from "../../../common/types/types";
import { Filters } from "../../../common/keys/keys";

import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useSearchParams from "../../stores/storage/usePersistentSearchParams";

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
  const {category,deliveryMethod,locationRange,addressCoords,deliveryParamsChanged,setDeliveryParamsChanged}= useSearchParams()

  useEffect(() => {
    if(!deliveryParamsChanged)  return;
    const routerUrlQuery:Record<string,string|number>={}
  
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
    
    if(routerUrlQuery)
    void  router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        ...routerUrlQuery,
      }
    });
    setDeliveryParamsChanged(false)

  }, [deliveryParamsChanged,router.query]);

  
  const updateShops = () => {
    resetShops();
    Object.keys(shops).forEach((shop) => {
      void updateListings(shop as ShopName);
    });
  };

  
  
  useEffect(() => {
    
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
};
export default useSearch;

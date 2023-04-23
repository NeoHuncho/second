import { useRouter } from "next/router";
import { useEffect } from "react";
import useShops from "../../stores/state/useShops";
import type { Category, ShopName } from "../../../common/types/types";
import { Filters } from "../../../common/keys/keys";
import { showNotification} from '@mantine/notifications';
import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useSearchParams from "../../stores/storage/usePersistentSearchParams";
import type { ParsedUrlQuery} from "querystring";
import { parse } from "querystring";
import useValidShops from "./useValidShops";
import { Categories } from "../../../common/keys/keys";


const useSearch = () => {

  const router = useRouter();
  const {
    updateListings,
    resetShops,
    setSort,
    setFilter,
  } = useShops();
  const { suggestedCat,  setSuggestedCat } = useSuggestedCat();
  const {deliveryMethod,locationRange,addressCoords,deliveryParamsChanged,address}= useSearchParams()
  const {validShopKeys: validShops}= useValidShops()
  useEffect(() => {
    if(!deliveryMethod) return;
    if (!window.location.search.includes("sort")) {
      setSort("recommended", router);
      return;
    }

    if (suggestedCat && Object.keys(Categories).includes(suggestedCat)) {
      setFilter({
        key: "category",
        value: suggestedCat,
        router,
      });
      setSuggestedCat("");
       showNotification({
        title: `Category ajoutée: ${Categories[suggestedCat as Category]}`,
        message: `Nous avons ajouté la catégorie ${Categories[suggestedCat as Category]} à votre recherche`,
        color: "teal", 
        autoClose:5000
      })
      return;
    }
    
    if (router.query.query) updateShops();
    
  }, [router.query]);

  useEffect(() => {
  
    const routerUrlQuery:Record<string,string|number>={}
    if(!router.query.query) return;
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
    const {deliveryMethod, lat, lng, locationRange, city,...cleanedSearch} = parsedSearch;
    return cleanedSearch;
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

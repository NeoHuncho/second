import { useRouter } from "next/router";
import { useEffect } from "react";
import useShops from "../../stores/state/useShops";
import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useLocalStorage from "../../stores/useLocalStorage";
import useSearchParams from "../../stores/state/useSearchParams";
import useValidShops from "./useValidShops";

import type { ParsedUrlQuery } from "querystring";
import { parse } from "querystring";

import { Filters, Categories } from "../../../common/keys/keys";
import type { Category, ShopName } from "../../../common/types/types";

import { showNotification } from "@mantine/notifications";

const useSearch = () => {
  const router = useRouter();
  const { deliveryMethod, locationRange, addressCoords, address } =
    useLocalStorage();

  const { updateListings, resetShops, setSort, setFilter } = useShops();

  const { suggestedCat, setSuggestedCat } = useSuggestedCat();

  const { deliveryParamChanged, setDeliveryParamChanged } = useSearchParams();

  const { validShopKeys: validShops } = useValidShops();

  const convertSearchToParsedUrlQuery = (): ParsedUrlQuery => {
    const search = window.location.search;
    const parsedSearch = parse(search.replace("?", ""));
    const { deliveryMethod, lat, lng, locationRange, city, ...cleanedSearch } =
      parsedSearch;
    return cleanedSearch;
  };

  const processNewDeliveryParams = () => {
    if (!router.query.query) return;
    const routerUrlQuery: Record<string, string | number> = {};
    if (deliveryMethod) routerUrlQuery[`deliveryMethod`] = deliveryMethod;
    if (addressCoords.lat && deliveryMethod !== "delivery")
      routerUrlQuery[`lat`] = addressCoords.lat;
    if (addressCoords.lng && deliveryMethod !== "delivery")
      routerUrlQuery[`lng`] = addressCoords.lng;
    if (locationRange && deliveryMethod !== "delivery")
      routerUrlQuery[`locationRange`] = locationRange;
    if (address && deliveryMethod !== "delivery")
      routerUrlQuery[`city`] = address;
    void router.push({
      pathname: router.pathname,
      query: {
        ...convertSearchToParsedUrlQuery(),
        ...routerUrlQuery,
      },
    });
  };

  const updateShops = () => {
    resetShops();
    validShops.forEach((shop) => {
      void updateListings(shop as ShopName);
    });
  };

  useEffect(() => {
    if (!deliveryMethod) return;
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
        message: `Nous avons ajouté la catégorie ${
          Categories[suggestedCat as Category]
        } à votre recherche`,
        color: "teal",
        autoClose: 5000,
      });
      return;
    }
    if (router.query.query) {
      updateShops();
    }
  }, [router.query]);

  useEffect(() => {
    if (!deliveryParamChanged) return;
    processNewDeliveryParams();
    setDeliveryParamChanged(false);
  }, [deliveryParamChanged]);
};

export default useSearch;

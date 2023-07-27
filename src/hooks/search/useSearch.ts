import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useShops from "../../stores/state/useShops";
import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useLocalStorage from "../../stores/useLocalStorage";
import useValidShops from "./useValidShops";

import type { ParsedUrlQuery } from "querystring";
import { parse } from "querystring";

import { Categories } from "../../../common/keys/keys";
import type { Category, ShopName } from "../../../common/types/types";

import { notifications } from "@mantine/notifications";
import useShopFilters from "../../stores/state/useShopFilters";
import {
  clothingShopOrder,
  defaultShopOrder,
  shoesShopOrder,
} from "../../static/storeOrder";

const useSearch = () => {
  const router = useRouter();
  const { deliveryMethod, locationRange, addressCoords, address } =
    useLocalStorage();

  const {
    updateListings,
    resetShops,
    setSort,
    shops,
    setLastSearched,
    lastSearched,
    setActiveShop,
    setShopOrder,
  } = useShops();
  const { setFilter, filters } = useShopFilters();

  const { suggestedCat, setSuggestedCat } = useSuggestedCat();

  const { validShopKeys: validShops } = useValidShops();
  const [alreadyHasListings, setAlreadyHasListings] = useState(true);

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
    setLastSearched(router.asPath);
    void updateListings(validShops[0] as ShopName);
    void updateListings(validShops[1] as ShopName);
  };

  useEffect(() => {
    if (alreadyHasListings) {
      setTimeout(() => {
        setAlreadyHasListings(false);
      }, 1000);
      return;
    }

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
      notifications.show({
        title: `Category ajoutée: ${Categories[suggestedCat as Category]}`,
        message: `Nous avons ajouté la catégorie ${
          Categories[suggestedCat as Category]
        } à votre recherche`,
        color: "teal",
        id: "category-added",
      });
      setTimeout(() => {
        notifications.hide("category-added");
      }, 4000);
      return;
    }
    if (router.query.query) {
      updateShops();
    }
  }, [router.query]);

  useEffect(() => {
    if (
      Object.values(shops).every((shop) => shop.listings.length === 0) ||
      router.asPath !== lastSearched
    )
      setAlreadyHasListings(false);
  }, []);

  useEffect(() => {
    processNewDeliveryParams();
  }, [deliveryMethod, locationRange, address]);

  useEffect(() => {
    if (!filters.category || filters.category === "all") {
      setShopOrder(defaultShopOrder);
      setActiveShop(defaultShopOrder[0] as ShopName);
    }
    if (filters.category === "clothes") {
      setShopOrder(clothingShopOrder);
      setActiveShop(clothingShopOrder[0] as ShopName);
    }
    if (filters.category === "shoes") {
      setShopOrder(shoesShopOrder);
      setActiveShop(shoesShopOrder[0] as ShopName);
    }
  }, [filters.category]);
};

export default useSearch;

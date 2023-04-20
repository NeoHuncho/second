import axios from "axios";
import type { ShopRes } from "../types/api/shopsRes";
import formatApiUrl from "../utils/url/formatApiUrl";
import formatStoreUrl from "../utils/url/formatStoreUrl";
type suggestedCatResponse = string
export type placeAutocomplete = {
  title: string;
  placeId: string;
};
type placeAutocompleteResponse = placeAutocomplete[];

export type placeLocation = {
  lat: number;
  lng: number;
};
const getSuggestedCat = async (searchTerm: string) =>
  await axios.get<suggestedCatResponse>(
    formatApiUrl({
      routeName: "search/getSuggestedCat",
      params: `text=${searchTerm}`,
    })
  );

const getShopListings = async ({
  name,
  page,
}: {
  name: string;
  page: number;
}) => {
  const url = formatStoreUrl({ store: name, page });
  if (!url) return;
  return await axios.get<ShopRes>(url);
};

const getPlaceAutocomplete = async (searchTerm: string) => 
  await axios.get<placeAutocompleteResponse>(
    formatApiUrl({
      routeName: "place/getAutocomplete",
      params: `text=${searchTerm}`,
    })
  );

const getPlaceLocation = async (placeId: string) => 
  await axios.get<placeLocation>(
    formatApiUrl({
      routeName: "place/getLocation",
      params: `placeId=${placeId}`,
    })
  );

export {
  getSuggestedCat,
  getShopListings,
  getPlaceAutocomplete,
  getPlaceLocation,
};

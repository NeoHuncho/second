import axios from "axios";
import type { ShopRes } from "../types/api/shopsRes";
import formatApiUrl from "../utils/url/formatApiUrl";
import formatStoreUrl from "../utils/url/formatStoreUrl";
type suggestedCatResponse = {
  suggestedCat: string;
  suggest: boolean;
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

export { getSuggestedCat, getShopListings };

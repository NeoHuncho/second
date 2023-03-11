import { readFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";
import getWebsiteScrape from "../../../backend/api/getZyte";
import formatQueriesToStoreUrl from "../../../backend/utils/parseUrl/formatQueriesToStoreUrl";

import parseLeboncoin from "../../../backend/utils/parseUrl/shops/parseLeboncoin";
import parseVinted from "../../../backend/utils/parseUrl/shops/parseVinted";
import getStaticListings from "../../../backend/utils/static/getStaticListings";
import type { ShopName } from "../../../common/types/types";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (!typeof request.query.params?.includes("query=")) {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "QUERY_PARAM_NOT_PROVIDED",
      error: "searched text has not been provided or is not a string",
    });
  }
  if (typeof request.query.page !== "string") {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "PAGE_PARAM_NOT_PROVIDED",
      error: "page number has not been provided or is not a string",
    });
  }

  const formattedStoreUrl = formatQueriesToStoreUrl(
    request.query as Partial<{ [key: string]: string }>
  );
  console.log(formattedStoreUrl);
  let res = "";
  if (env.NODE_ENV === "production")
    res = await getWebsiteScrape(formattedStoreUrl);
  else res = await getStaticListings(request.query.shop as ShopName);

  const formatListings = (shopName: ShopName) => {
    switch (shopName) {
      case "Leboncoin":
        return parseLeboncoin(res);
      //vinted has additional parameter for sorting because the sorting does not work on the website
      case "Vinted":
        return parseVinted(res, request.query.sort as string | undefined);
      default:
        return [];
    }
  };

  response.status(200).json({
    query: request.query,
    cookies: request.cookies,
    listings: formatListings(request.query.shop as ShopName),
    url: formattedStoreUrl,
  });
}

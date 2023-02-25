import { readFile, writeFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";
import getWebsiteScrape from "../../../backend/api/getZyte";
import formatQueriesToStoreUrl from "../../../backend/utils/parse/formatQueriesToStoreUrl";

import parseLeboncoin from "../../../backend/utils/parse/shops/parseLeboncoin";
import parseVinted from "../../../backend/utils/parse/shops/parseVinted";
import type { Shops } from "../../types/types";

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

  let res = null;
  if (env.NODE_ENV === "production")
    res = await getWebsiteScrape(
      formatQueriesToStoreUrl(
        request.query as Partial<{ [key: string]: string }>
      )
    );
  else {
    if (request.query.shop === "Leboncoin")
      res = await readFile("backend/static/shops/leboncoin.txt", {
        encoding: "utf8",
      });
    else
      res = await readFile("backend/static/shops/vinted.txt", {
        encoding: "utf8",
      });
  }

  response.status(200).json({
    query: request.query,
    cookies: request.cookies,
    listings:
      request.query.shop === "Leboncoin"
        ? parseLeboncoin(res)
        : parseVinted(res),
    requestedUrl: formatQueriesToStoreUrl(
      request.query as Partial<{ [key: string]: string }>
    ),
  });
}

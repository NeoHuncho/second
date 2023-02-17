import { readFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";
import getWebsiteScrape from "../../../../backend/api/getZyte";
import parseLeboncoin from "../../../../backend/utils/parse/shops/parseLeboncoin";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.text !== "string") {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "TEXT_PARAM_NOT_PROVIDED",
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
      `https://www.leboncoin.fr/recherche?text=${encodeURIComponent(
        request.query.text
      )}&page=${request.query.page}`
    );
  else
    res = await readFile("backend/static/shops/leboncoin.txt", {
      encoding: "utf8",
    });

  response.status(200).json({
    query: request.query,
    cookies: request.cookies,
    listings: parseLeboncoin(res),
  });
}

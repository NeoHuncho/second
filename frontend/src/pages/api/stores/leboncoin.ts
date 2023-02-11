import type { NextApiRequest, NextApiResponse } from "next";
import getWebsiteScrape from "../../../../backend/api/getZyte";
import parseLeboncoin from "../../../../backend/utils/parse/shops/parseLebonoin";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.text !== "string") {
    response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      error: "url has not been provided or is not a string",
    });
  }
  if (typeof request.query.text === "string") {
    const res = await getWebsiteScrape(
      `https://www.leboncoin.fr/recherche?text=${encodeURIComponent(
        request.query.text
      )}`
    );

    response.status(200).json({
      query: request.query,
      cookies: request.cookies,
      listings: parseLeboncoin(res),
    });
  }
}

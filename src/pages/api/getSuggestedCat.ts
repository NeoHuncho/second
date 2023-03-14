import type { NextApiRequest, NextApiResponse } from "next";
import suggestedCat from "../../../backend/utils/suggestedCat/suggestedCat";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.text !== "string") {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "PAGE_PARAM_NOT_PROVIDED",
      error: "page number has not been provided or is not a string",
    });
  }
  const data = await suggestedCat(request.query.text);
  response.status(200).json(data);
}

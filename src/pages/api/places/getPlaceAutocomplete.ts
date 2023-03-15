import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type MapsData = {
  predictions: {
    description: string;
    place_id: string;
    structured_formatting: {
      main_text: string;
    };
  }[];
  status: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.text !== "string") {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "TEXT_NOT_PROVIDED",
      error: "text has not been provided or is not a string",
    });
  }
  const data = await axios.get<MapsData>(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${
      request.query.text
    }&types=(cities)&language=fr&components=country:fr&key=${
      process.env.GOOGLE_MAPS_API_KEY || ""
    }`
  );
  if (data.data.status !== "OK")
    return response.status(400).json({ error: "error" });
  const formattedData = data.data.predictions.map((prediction) => {
    return {
      title: prediction.structured_formatting.main_text,
      placeId: prediction.place_id,
    };
  });
  response.status(200).json(formattedData);
}

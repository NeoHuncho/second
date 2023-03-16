import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type MapsData = {
  status: string;
  result: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  };
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.placeId !== "string") {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "PLACE_ID_PARAM_NOT_PROVIDED",
      error: "place id has not been provided or is not a string",
    });
  }
  //https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&fields=geometry&key=AIzaSyCPqxh98wA74XdYZ8sp0ahclBPLdghEHl0
  const data = await axios.get<MapsData>(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${
      request.query.placeId
    }&fields=geometry&key=${process.env.GOOGLE_MAPS_API_KEY || ""}`
  );
  if (data.data.status !== "OK")
    return response.status(400).json({
      error: "error",
    });
  const formattedData = data.data.result.geometry.location;
  response.status(200).json(formattedData);
}

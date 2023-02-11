import axios from "axios";
const API_URL = "https://api.zyte.com/v1/extract";
const API_KEY = "69a64864e18441039bb861a4c5090899";

interface WebsiteData {
  url: string;
  httpResponseBody: boolean;
}

interface ResponseData {
  httpResponseBody: string;
}

const getWebsiteScrape = async (websiteUrl: string) => {
  const data: WebsiteData = {
    url: websiteUrl,
    httpResponseBody: true,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic " + Buffer.from(`${API_KEY}:`).toString("base64"),
  };

  try {
    const response = await axios.post<ResponseData>(API_URL, data, { headers });
    const httpResponseBody = Buffer.from(
      response.data.httpResponseBody,
      "base64"
    ).toString();
    return httpResponseBody;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default getWebsiteScrape;

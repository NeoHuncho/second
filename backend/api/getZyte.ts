import axios from "axios";
const API_URL = "https://api.zyte.com/v1/extract";
const API_KEY = process.env.ZYTE_API_KEY || "";

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
  let httpResponseBody;
  try {
    const response = await axios.post<ResponseData>(API_URL, data, { headers });
    httpResponseBody = Buffer.from(
      response.data.httpResponseBody,
      "base64"
    ).toString();
  } catch (error) {
    const response = await axios.post<ResponseData>(API_URL, data, {
      headers,
    });
    httpResponseBody = Buffer.from(
      response.data.httpResponseBody,
      "base64"
    ).toString();
  }
  return httpResponseBody;
};

export default getWebsiteScrape;

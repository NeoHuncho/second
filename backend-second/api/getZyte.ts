import axios from 'axios';
import { writeFile } from 'fs';
const API_URL = 'https://api.zyte.com/v1/extract';
const API_KEY = '69a64864e18441039bb861a4c5090899';

const getWebsiteScrape = (websiteUrl: string) => {
  const data = {
    url: websiteUrl,
    httpResponseBody: true,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + Buffer.from(`${API_KEY}:`).toString('base64'),
  };

  axios
    .post(API_URL, data, { headers })
    .then((response) => {
      const httpResponseBody = Buffer.from(
        response.data.httpResponseBody,
        'base64'
      ).toString();
      console.log(typeof httpResponseBody);
      writeFile('data.json', httpResponseBody, (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
      return httpResponseBody;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getWebsiteScrape;

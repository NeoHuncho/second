import { api, data, schedule, params } from '@serverless/cloud';
import scrapeFnac from './puppeteer/fnac';

// Redirect to users endpoint
api.get('/test', (req, res) => {
  res.send('Hello World!');
});

api.get('/fnac', (req, res) => {
  console.time();
  scrapeFnac().then((res) => console.time());
  console.log('done');
  res.send('done');
});

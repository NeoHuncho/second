//@ts-nocheck
import { readFile } from 'fs';
import getWebsiteScrape from '../api/getZyte';

const draft = async () => {
  const data: any = await getWebsiteScrape(
    'https://www.leboncoin.fr/recherche?text=steel%20hr'
  );
  console.log(2);
  await readFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
};
draft();

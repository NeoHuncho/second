import { load } from "cheerio";
import type { ShopListing } from "../../../../src/types/types";

type LeboncoinData = {
  props: {
    pageProps: {
      searchData: {
        ads: LeboncoinItem[];
      };
    };
  };
};

export interface LeboncoinItem {
  list_id: number;
  first_publication_date: string;
  index_date: string;
  status: string;
  category_id: string;
  category_name: string;
  subject: string;
  body: string;
  ad_type: string;
  url: string;
  price: number[];
  price_cents: number;
  images: Images;
  attributes: Attribute[];
}

interface Images {
  thumb_url: string;
  small_url: string;
  urls: string[];
  urls_thumb: string[];
  urls_large: string[];
}

interface Attribute {
  key: string;
  value: string;
  values: string[];
}
const parseLeboncoin = (responseText: string) => {
  const $ = load(responseText);
  const data = $("script")
    .filter((i, el) => {
      return $(el).attr("id") === "__NEXT_DATA__";
    })
    .text();
  const leboncoinRes = JSON.parse(data) as LeboncoinData;
  const formatted: ShopListing[] = [];
  Object.values(leboncoinRes.props.pageProps.searchData.ads)
    .filter((item) => item.status === "active" && item.ad_type === "offer")
    .map((item) => {
      formatted.push({
        images: {
          urls: item.images.urls,
          urls_thumb: item.images.urls_thumb,
          small_url: item.images.small_url,
          url: item.images.urls?.[0] || item.images.small_url,
        },
        id: item.list_id,
        body: item.body,
        price: item.price[0] || 0,
        title: item.subject,
        url: item.url,
        attributes: item.attributes,
        category_name: item.category_name,
        category_id: item.category_id,
      });
    });
  return formatted;
};

export default parseLeboncoin;

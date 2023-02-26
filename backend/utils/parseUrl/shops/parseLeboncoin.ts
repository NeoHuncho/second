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
  value_label: string;
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
  if (!leboncoinRes.props.pageProps.searchData.ads) return formatted;

  Object.values(leboncoinRes.props.pageProps.searchData.ads)
    .filter((item) => {
      let hasFilteredAttributes = false;
      item.attributes.forEach((attribute) => {
        if (
          attribute.key === "transaction_status" &&
          (attribute.value === "sold" || attribute.value === "pending")
        )
          hasFilteredAttributes = true;
        if (attribute.key === "shippable" && attribute.value !== "true")
          hasFilteredAttributes = true;
      });
      return (
        !hasFilteredAttributes &&
        item.status === "active" &&
        item.ad_type === "offer"
      );
    })
    .map((item) => {
      const attributes = item.attributes.filter((attribute) => {
        return attribute.key !== "condition" && attribute.key !== "shippable";
      });
      formatted.push({
        images: {
          urls: item.images.urls,
          urls_thumb: item.images.urls_thumb,
          url_thumb: item.images.urls?.[0] || item.images.small_url,
          url: item.images.urls?.[0] || item.images.small_url,
        },
        id: item.list_id,
        body: item.body,
        price: item.price?.[0] || 0,
        title: item.subject,
        url: item.url,
        attributes: item.attributes,
        category_name: item.category_name,
        category_id: item.category_id,
        condition: item.attributes.find(
          (attribute) => attribute.key === "condition"
        )?.value_label,
        shippable:
          item.attributes.find((attribute) => attribute.key === "shippable")
            ?.value === "true",
      });
    });
  return formatted;
};

export default parseLeboncoin;

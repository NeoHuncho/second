import { load } from "cheerio";

import type { ShopListing } from "../../../../src/types/types";

type vintedData = {
  items: {
    catalogItems: {
      byId: {
        [key: string]: VintedItem;
      };
    };
  };
};
type VintedItem = {
  id: number;
  title: string;
  total_item_price: string;
  discount: string;
  brand_title: string;
  link: string;
  size: string;
  photo: {
    url: string;
    thumbnails: ImageVinted[];
  };
};
type ImageVinted = {
  url: string;
};

const parseVinted = (responseText: string) => {
  const $ = load(responseText);
  const data = $("script")
    .filter((i, el) => {
      return $(el).attr("data-js-react-on-rails-store") === "MainStore";
    })
    .text();
  const vintedData = JSON.parse(data) as vintedData;
  const formatted: ShopListing[] = [];
  Object.values(vintedData.items.catalogItems.byId).map((item) => {
    formatted.push({
      price: parseFloat(item.total_item_price),
      id: item.id,
      images: {
        url_thumb: item.photo.thumbnails?.[2]?.url || "",
        url: item.photo.url,
      },
      title: item.title,
    });
  });

  return formatted;
};

export default parseVinted;

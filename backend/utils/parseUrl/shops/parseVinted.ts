import { load } from "cheerio";

import type { ShopListing } from "../../../../src/types/types";

type vintedData = {
  items: {
    catalogItems: {
      byId: {
        [key: string]: VintedItem;
      };
      searchParams: {
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
  url: string;
  size_title: string;
  photo: {
    url: string;
    thumbnails: ImageVinted[];
  };
};
type ImageVinted = {
  url: string;
};

type SearchParam = {
  score: number;
};

const parseVinted = (responseText: string, sortBy: string | undefined) => {
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
      url: item.url,
      title: item.title,
      shippable: true,
      size: item.size_title,
    });
  });

  if (sortBy && sortBy.includes("price")) {
    if (sortBy.includes("asc"))
      return formatted.sort((a, b) => a.price - b.price);
    else return formatted.sort((a, b) => b.price - a.price);
  }

  const searchParams = vintedData.items.catalogItems.searchParams;
  return formatted.sort((a, b) => {
    const aScore = (searchParams[a.id] as unknown as SearchParam).score;
    const bScore = (searchParams[b.id] as unknown as SearchParam).score;
    return bScore - aScore;
  });
};

export default parseVinted;

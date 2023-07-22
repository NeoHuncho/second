import { load } from "cheerio";
import type { ShopListing } from "../../../../src/types/types";

const getTime = (inputString: string, unit: "d" | "h" | "m") => {
  let regex;
  switch (unit) {
    case "d":
      regex = /([0-9]+)\s*j/g;
      break;
    case "h":
      regex = /([0-9]+)\s*h/g;
      break;
    case "m":
      regex = /([0-9]+)\s*min/g;
      break;
    default:
      return null;
  }

  const match = inputString.trim().match(regex);
  if (match && match[0]) {
    // Extract just the numeric part
    const number = match[0].replace(/[^0-9]/g, "");
    return parseInt(number, 10);
  } else return undefined;
};

const parseEbay = (responseText: string) => {
  const $ = load(responseText);
  const items: ShopListing[] = [];
  $("li.s-item__pl-on-bottom").each(function () {
    const priceElementText = $(this)
      .find(".s-item__price")
      .first()
      .text()
      .replace(/[\n\r]+|[\s]{2,}/g, " ")
      .trim();
    let shippingCost = $(this).find(".s-item__shipping").text();
    if (!shippingCost)
      shippingCost = $(this)
        .find(".s-item__freeXDays")
        .children()
        .first()
        .text()
        .includes("Livraison gratuite")
        ? "Livraison gratuite"
        : "";
    const isAuction = $(this).find(".s-item__bidCount").length > 0;
    if (!$(this).attr("id")) return;
    items.push({
      id: Math.floor(Math.random() * 1000000000),
      type: "ShopListing",
      url: $(this).find(".s-item__image a").attr("href") || "",
      images: {
        url: $(this).find(".s-item__image-img").attr("src") || "",
        url_thumb: $(this).find(".s-item__image-img").attr("src") || "",
      },
      title: $(this).find(".s-item__title span").text().trim(),
      condition: $(this).find(".s-item__subtitle").text().trim(),
      price: parseFloat(
        priceElementText.substring(0, priceElementText.indexOf(" "))
      ),
      shippingCost:
        shippingCost === "Livraison gratuite"
          ? 0
          : parseFloat(
              shippingCost
                .replace(/[\n\r]+|[\s]{2,}/g, " ")
                .trim()
                .replace(/EUR/g, "")
                .replace(/,/, ".")
            ),
      // check if s-item__bidCount exists, if it does, get the text from s-item__time-left (example : Il reste 5 j 21 h) retreive only the number of days and hours and minutes
      isAuction,
      auctionTimeLeftDays: isAuction
        ? getTime($(this).find(".s-item__time-left").text(), "d") || undefined
        : undefined,
      auctionTimeLeftHours: isAuction
        ? //find number before "h"
          getTime($(this).find(".s-item__time-left").text(), "h") || undefined
        : undefined,
      auctionTimeLeftMinutes: isAuction
        ? //find number before "m"
          getTime($(this).find(".s-item__time-left").text(), "m") || undefined
        : undefined,
    });
  });
  return items;
};

export default parseEbay;

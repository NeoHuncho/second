import React, { useRef, useEffect, useState } from "react";
import type { Shop, ShopListing } from "../../../types/types";
import Listing from "./sub/Listing";
import useListingsInView from "../../../hooks/search/useListingsInView";
import { useInView } from "react-intersection-observer";
import useShops from "../../../stores/state/useShops";
import type { ShopName } from "../../../../common/types/types";
import { Loader } from "@mantine/core";
import InfiniteScroll from "react-infinite-scroller";
interface Props {
  shop: Shop;
}

export default function ListingShopGrid({ shop }: Props) {
  const { updateListings } = useShops();
  const listingsInView = useListingsInView();
  const showItems = (listings: ShopListing[]) => {
    if (!listings || !listings.length) return null;
    const items = [];

    for (let i = 0; i < records; i++) {
      const listing = listings[i];
      if (!listing) break;
      items.push(
        <div className={"col-span-1"} key={`${listing.id}/${shop.name}`}>
          <Listing listing={listing} isScrolling={false} enlargeButton />
        </div>
      );
    }
    return items;
  };
  const itemsPerPage = 20;
  const [hasMore, setHasMore] = useState(true);
  const [records, setRecords] = useState(itemsPerPage);
  useEffect(() => {
    setRecords(itemsPerPage);
    setHasMore(true);
  }, [shop]);

  const loadMore = () => {
    if (shop.status === "loading") return;
    if (shop.hasFetchedAll) return setHasMore(false);
    if (records === shop.listings.length) {
      console.log("fetching next page");
      void updateListings(shop.name);
    } else {
      setTimeout(() => {
        if (records + itemsPerPage > shop.listings.length)
          return setRecords(shop.listings.length);
        setRecords(records + itemsPerPage);
      }, 1);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<Loader color={shop.color} />}
      threshold={450}
    >
      <div
        className={`grid w-full gap-3`}
        style={{
          gridTemplateColumns: `repeat(${listingsInView}, minmax(0, 1fr))`,
        }}
      >
        {showItems(shop.listings)}
      </div>
    </InfiniteScroll>
  );
}

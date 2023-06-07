import React, { useRef, useEffect, useState } from "react";
import type { Shop, ShopListing } from "../../../types/types";
import Listing from "./sub/Listing";
import useListingsInView from "../../../hooks/search/useListingsInView";
import { useInView } from "react-intersection-observer";
import useShops from "../../../stores/state/useShops";
import type { ShopName } from "../../../../common/types/types";
import { Loader, RingProgress, Text } from "@mantine/core";
import InfiniteScroll from "react-infinite-scroller";
import useSearchParams from "../../../stores/state/useSearchParams";
interface Props {
  shop: Shop;
}

const RingLoader = ({ color }: { color: string }) => {
  const [ringValue, setRingValue] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ringValue >= 99) {
        clearInterval(intervalId);
      } else {
        setRingValue(ringValue + 1);
      }
    }, 45);

    return () => {
      clearInterval(intervalId);
    };
  }, [ringValue]);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-2">
      <RingProgress
        size={45}
        thickness={5}
        sections={[{ value: ringValue, color: color }]}
      />
      {ringValue < 99 && <Text>Ça arrive...🌱</Text>}
      {ringValue >= 99 && (
        <div className="flex flex-col items-center justify-center gap-2">
          <Text className="font-bold">Cela prend plus de temps que prévu</Text>
          <Text italic>
            Veuillez patienter, nous relançons la recherche...🛠
          </Text>
        </div>
      )}
    </div>
  );
};

export default function ListingsShop({ shop }: Props) {
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
    setRecords(
      shop.listings.length < itemsPerPage ? shop.listings.length : itemsPerPage
    );
    setHasMore(true);
    window.scrollTo(0, 0);
  }, [shop.name]);

  const loadMore = () => {
    console.log("loading more");
    if (shop.status === "loading") return;
    if (shop.hasFetchedAll) return setHasMore(false);
    if (records === shop.listings.length) {
      return void updateListings(shop.name);
    } else {
      setTimeout(() => {
        if (records + itemsPerPage > shop.listings.length) {
          return setRecords(shop.listings.length);
        }
        setRecords(records + itemsPerPage);
      }, 1);
    }
  };

  if (!listingsInView) return <></>;
  if (shop.status === "error")
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-2">
        <Text className="font-bold">Une erreur est survenue</Text>
        <Text italic>Veuillez réessayer votre recherche 🔎</Text>
      </div>
    );
  if (shop.status === "no_results")
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-2">
        <Text className="font-bold">Aucun résultat trouvé</Text>
        <Text italic>Veuillez essayer une autre recherche 🔎</Text>
      </div>
    );

  if (!shop.listings.length) return <RingLoader color={shop.color} />;
  return (
    <InfiniteScroll
      key={shop.name}
      pageStart={0}
      loadMore={() => void loadMore()}
      hasMore={hasMore}
      loader={
        records > itemsPerPage ? <Loader color={shop.color} /> : undefined
      }
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

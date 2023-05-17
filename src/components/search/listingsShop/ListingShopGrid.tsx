import React, { useRef, useEffect, useState } from "react";
import type { Shop } from "../../../types/types";
import Listing from "./sub/Listing";
import useListingsInView from "../../../hooks/search/useListingsInView";
import { useInView } from "react-intersection-observer";
import useShops from "../../../stores/state/useShops";
import type { ShopName } from "../../../../common/types/types";
import { Loader } from "@mantine/core";
interface Props {
  shop: Shop;
}

const useLastListing = (shop: Shop) => {
  const { updateListings } = useShops();
  const { ref, inView, entry } = useInView({
    threshold: 1,
    rootMargin: "0px 0px 0px 0px",
  });
  const [reachedEnd, setReachedEnd] = useState(inView);
  useEffect(() => {
    if (reachedEnd) return setReachedEnd(false);
    if (!inView || shop.loadingNextPage) return;
    void updateListings(shop.name);
    setReachedEnd(true);
  }, [inView]);
  return { lastListingRef: ref };
};

const useListingsDisplayed = (shop: Shop) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [listingsDisplayed, setListingsDisplayed] = useState<Set<number>>(
    new Set()
  );
  const [currentShop, setCurrentShop] = useState(shop.name);
  useEffect(() => {
    if (shop.name !== currentShop) {
      setCurrentShop(shop.name);
      setListingsDisplayed(new Set());
    }
    const newObserver = new IntersectionObserver(
      (entries) => {
        const entriesDisplayed = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number(entry.target.id));
        if (!entriesDisplayed.length) return;
        setListingsDisplayed((prev) => {
          const newSet = new Set(prev);
          entriesDisplayed.forEach((entry) => {
            newSet.add(entry);
          });
          return newSet;
        });
      },
      { rootMargin: "200px", threshold: 0.5 }
    );

    observer.current = newObserver;

    const elements = document.querySelectorAll(".col-span-1");
    elements.forEach((element) => {
      observer.current?.observe(element);
    });
    return () => {
      observer.current?.disconnect();
    };
  }, [shop]);

  return listingsDisplayed;
};

export default function ListingShopGrid({ shop }: Props) {
  const listingsInView = useListingsInView();
  const { lastListingRef } = useLastListing(shop);
  const listingsDisplayed = useListingsDisplayed(shop);
  const [shopChanged, setShopChanged] = useState(false);

  useEffect(() => {
    setShopChanged(true);
  }, [shop.name]);

  useEffect(() => {
    if (!shopChanged) return;
    setShopChanged(false);
  }, [shopChanged]);
  if (shopChanged) return <Loader />;
  return (
    <div
      className={`grid w-full gap-3`}
      style={{
        gridTemplateColumns: `repeat(${listingsInView}, minmax(0, 1fr))`,
      }}
    >
      {shop.listings.map((listing, index) => (
        <div
          ref={index === shop.listings.length - 9 ? lastListingRef : undefined}
          className="col-span-1 "
          id={index.toString()}
          key={listing.id}
        >
          <Listing
            listing={listing}
            isScrolling={false}
            loadImage={listingsDisplayed.has(index)}
            enlargeButton
          />
        </div>
      ))}
    </div>
  );
}

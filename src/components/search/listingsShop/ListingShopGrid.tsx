import React, { useRef, useEffect, useState } from "react";
import type { Shop } from "../../../types/types";
import Listing from "./sub/Listing";
import useListingsInView from "../../../hooks/search/useListingsInView";

interface Props {
  shop: Shop;
}

const useLastingListing = () => {
  const lastListingRef = useRef<HTMLDivElement>(null);
  const [reachedEnd, setReachedEnd] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setReachedEnd(true);
        }
      },
      {
        rootMargin: "-200px",
      }
    );
    if (lastListingRef.current) {
      observer.observe(lastListingRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return { lastListingRef, reachedEnd };
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
  const { lastListingRef, reachedEnd } = useLastingListing();
  const listingsDisplayed = useListingsDisplayed(shop);
  return (
    <div
      className={`grid w-full gap-3`}
      style={{
        gridTemplateColumns: `repeat(${listingsInView}, minmax(0, 1fr))`,
      }}
    >
      {shop.listings.map((listing, index) => (
        <div className="col-span-1 " id={index.toString()} key={listing.id}>
          <Listing
            listing={listing}
            isScrolling={false}
            loadImage={listingsDisplayed.has(index)}
            enlargeButton
          />
          {reachedEnd && index === shop.listings.length - 1 && (
            <div ref={lastListingRef} />
          )}
        </div>
      ))}
    </div>
  );
}

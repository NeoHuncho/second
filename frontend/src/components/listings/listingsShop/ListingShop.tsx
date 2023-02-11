import { Carousel } from "@mantine/carousel";
import { Card, Title } from "@mantine/core";
import Image from "next/image";
import { Image as ImageMantine } from "@mantine/core";
import React from "react";
import type { Shop } from "../../../types/types";
import { useMediaQuery } from "@mantine/hooks";
import Listing from "./sub/Listing";

interface Props {
  shop: Shop;
}

export default function ListingShop({ shop }: Props) {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");

  if (shop.status === "success")
    return (
      <div>
        <div className="relative h-16 w-40">
          <Image
            className="object-contain"
            fill
            src={shop.image}
            alt={shop.name}
          />
        </div>

        <Carousel
          height={!smallBreakpoint ? 320 : 350}
          slideSize={!smallBreakpoint ? "50%" : "18%"}
          slideGap={"md"}
          dragFree
          align={"start"}
          slidesToScroll={!smallBreakpoint ? 2 : 5}
          controlSize={!smallBreakpoint ? 20 : 25}
          withIndicators
        >
          {shop.listings.map((listing) => (
            <Carousel.Slide key={listing.image}>
              <Listing listing={listing} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    );
  return <></>;
}

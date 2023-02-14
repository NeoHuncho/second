import { Carousel } from "@mantine/carousel";
import Image from "next/image";

import React, { useEffect } from "react";
import type { Shop } from "../../../types/types";
import { useMediaQuery } from "@mantine/hooks";
import Listing from "./sub/Listing";
import type { EmblaCarouselType } from "embla-carousel-react";

interface Props {
  shop: Shop;
}
//embla.slidesInView()
export default function ListingShop({ shop }: Props) {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");
  const [embla, setEmbla] = React.useState<EmblaCarouselType | null>(null);
  const [slidesInView, setSlidesInView] = React.useState<number[]>([]);

  useEffect(() => {
    setSlidesInView(embla?.slidesInView() || []);
    if (embla) {
      embla.on("select", () => {
        setSlidesInView((slidesInView) =>
          Array.from(
            new Set([
              ...slidesInView,
              ...new Set(
                (embla.slidesInView().map((slide) => slide * 2) || []).sort()
              ),
            ])
          )
        );
      });
      embla.on("settle", () => {
        Array.from(
          new Set([
            ...slidesInView,
            ...new Set(
              (embla.slidesInView().map((slide) => slide * 2) || []).sort()
            ),
          ])
        );
      });
    }
  }, [embla]);
  if (shop.status === "success")
    return (
      <div className="flex flex-col gap-3">
        <div className="relative h-16 w-40">
          <Image
            className="object-contain"
            fill
            src={shop.image}
            alt={shop.name}
          />
        </div>

        <Carousel
          getEmblaApi={(embla) => {
            setEmbla(embla);
          }}
          height={!smallBreakpoint ? 280 : 300}
          slideSize={!smallBreakpoint ? "33%" : "11%"}
          slideGap={"md"}
          dragFree
          align={"start"}
          slidesToScroll={!smallBreakpoint ? 2 : 5}
          controlSize={!smallBreakpoint ? 20 : 25}
          withIndicators
        >
          {shop.listings.map((listing, index) => (
            <Carousel.Slide key={listing.id}>
              <Listing
                listing={listing}
                inView={(slidesInView?.[slidesInView.length - 1] || 0) >= index}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    );
  return <></>;
}

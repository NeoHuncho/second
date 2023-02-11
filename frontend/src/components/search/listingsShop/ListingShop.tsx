import { Carousel } from "@mantine/carousel";
import { Card, Title } from "@mantine/core";
import Image from "next/image";
import { Image as ImageMantine } from "@mantine/core";
import React from "react";
import type { Shop } from "../../../types/types";
import { useMediaQuery } from "@mantine/hooks";

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
          height={!smallBreakpoint ? 300 : 350}
          slideSize={!smallBreakpoint ? "45%" : "18%"}
          slideGap={"md"}
          dragFree
          align={"start"}
          slidesToScroll={!smallBreakpoint ? 2 : 5}
          controlSize={!smallBreakpoint ? 20 : 25}
          withIndicators
        >
          {shop.listings.map((listing) => (
            <Carousel.Slide key={listing.image}>
              <Card
                className="h-full"
                shadow="sm"
                p="sm"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ImageMantine
                    height={!smallBreakpoint ? 150 : 200}
                    src={listing.image}
                    alt={listing.title}
                  />
                  <Title className="absolute right-0 -mt-7 rounded-tl-lg bg-white px-2 text-xl">{`${listing.price} €`}</Title>
                </Card.Section>
                <div className="flex h-full flex-col gap-3 ">
                  <Title lineClamp={2} className="mt-3 text-lg">
                    {listing.title}
                  </Title>
                </div>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    );
  return <></>;
}

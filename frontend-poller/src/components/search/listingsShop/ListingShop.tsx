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
  console.log(smallBreakpoint);
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
          height={!smallBreakpoint ? 260 : 350}
          slideSize={!smallBreakpoint ? "50%" : "20%"}
          slideGap={"md"}
          dragFree
          align={"start"}
          slidesToScroll={!smallBreakpoint ? 2 : 5}
        >
          {shop.listings.map((listing) => (
            <Carousel.Slide key={listing.image}>
              <Card
                className="h-full"
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ImageMantine
                    className="h-1/2"
                    src={listing.image}
                    alt={listing.title}
                  />
                </Card.Section>
                <div className="flex flex-col gap-3">
                  <Title lineClamp={2} className="mt-3 text-xl">
                    {listing.title}
                  </Title>
                  <Title className="text-lg">{`${listing.price} €`}</Title>
                </div>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    );
  return <></>;
}

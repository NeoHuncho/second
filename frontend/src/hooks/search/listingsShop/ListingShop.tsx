import { Carousel } from "@mantine/carousel";
import { Card, Title } from "@mantine/core";
import Image from "next/image";
import { Image as ImageMantine } from "@mantine/core";
import React from "react";
import type { Shop } from "../../../types/types";

interface Props {
  shop: Shop;
}

export default function ListingShop({ shop }: Props) {
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
          height={350}
          slideSize="20%"
          slideGap={"md"}
          dragFree
          align={"start"}
          slidesToScroll={5}
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
                  <ImageMantine src={listing.image} alt={listing.title} />
                </Card.Section>
                <div className="flex flex-col gap-3 ">
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

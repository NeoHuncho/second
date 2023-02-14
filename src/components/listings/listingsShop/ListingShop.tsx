import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import React, { useEffect } from "react";
import type { Shop } from "../../../types/types";
import { useMediaQuery } from "@mantine/hooks";
import Listing from "./sub/Listing";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface Props {
  shop: Shop;
}
//embla.slidesInView()
export default function ListingShop({ shop }: Props) {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");

  if (shop.status === "success")
    return (
      <div className="flex w-full flex-col gap-3">
        <div className="relative h-16 w-40">
          <Image
            className="object-contain"
            fill
            src={shop.image}
            alt={shop.name}
          />
        </div>
        <div className="flex w-full flex-wrap">
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            freeMode
            navigation
            spaceBetween={20}
            slidesPerView={!smallBreakpoint ? 2 : 8}
            watchSlidesProgress
          >
            {shop.listings.map((listing, index) => (
              <SwiperSlide key={listing.id}>
                {({ isVisible }) => (
                  <Listing listing={listing} inView={isVisible} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  return <></>;
}

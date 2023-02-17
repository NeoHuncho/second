import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import type { Shop } from "../../../types/types";
import Listing from "./sub/Listing";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import useBreakpoints from "../../../hooks/ui/useBreakpoints";
import { useRef, useState } from "react";
import useCarousel from "../../../hooks/carousel/useCarousel";
import { Loader } from "@mantine/core";
import useShops from "../../../hooks/search/shops/useShops";
import SwipperNavButton from "./sub/SwipperNavButton";

interface Props {
  shop: Shop;
}
export default function ListingShop({ shop }: Props) {
  const breakpoints = useBreakpoints();
  const { loadMoreSlides, handleIndexChange, slides, swiperRef } = useCarousel(
    shop.name
  );
  console.log("time", slides.length);
  const { shops } = useShops();
  const slidesPerView = !breakpoints.xxsBreakpoint
    ? 1
    : !breakpoints.xsBreakpoint
    ? 2
    : !breakpoints.smBreakpoint
    ? 3
    : !breakpoints.mdBreakpoint
    ? 4
    : !breakpoints.lgBreakpoint
    ? 5
    : !breakpoints.xlBreakpoint
    ? 6
    : !breakpoints.xxlBreakpoint
    ? 7
    : 8;

  if (shop.status === "success")
    return (
      <div className="flex w-full flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <div className="relative h-16 w-40 ">
            <Image
              className="object-contain"
              fill
              src={shop.image}
              alt={shop.name}
            />
          </div>
          {shops[shop.name].loadingNextPage && <Loader color={shop.color} />}
        </div>
        <div className="2 flex w-full flex-wrap">
          <Swiper
            className="select-none"
            modules={[Navigation, Thumbs]}
            onRealIndexChange={(swiper) => {
              handleIndexChange(swiper.realIndex);
            }}
            navigation={{
              prevEl: "#custom-prev-button",
              nextEl: "#custom-next-button",
            }}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            watchSlidesProgress
            cssMode={breakpoints.isMobile}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {slides.map((listing) => (
              <SwiperSlide key={listing.id}>
                <Listing listing={listing} />
              </SwiperSlide>
            ))}
            <SwipperNavButton type="prev" />
            <SwipperNavButton type="next" />
          </Swiper>
        </div>
      </div>
    );
  return <></>;
}

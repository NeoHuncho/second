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

interface Props {
  shop: Shop;
}
export default function ListingShop({ shop }: Props) {
  const breakpoints = useBreakpoints();
  const { loadMoreSlides, handleIndexChange, slides, swiperRef } = useCarousel(
    shop.name
  );
  const { shops } = useShops();
  const slidesPerView = !breakpoints.xxsBreakpoint
    ? 1
    : !breakpoints.xsBreakpoint
    ? 2
    : !breakpoints.smBreakpoint
    ? 3
    : !breakpoints.mdBreakpoint
    ? 3
    : !breakpoints.lgBreakpoint
    ? 4
    : !breakpoints.xlBreakpoint
    ? 5
    : !breakpoints.xxlBreakpoint
    ? 6
    : 7;

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
            modules={[FreeMode, Navigation, Thumbs]}
            freeMode
            onRealIndexChange={(swiper) => {
              handleIndexChange(swiper.realIndex);
            }}
            cssMode={breakpoints.isMobile}
            navigation
            spaceBetween={20}
            slidesPerView={slidesPerView}
            watchSlidesProgress
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {slides.map((listing) => (
              <SwiperSlide className="!mr-0 pr-5" key={listing.id}>
                <Listing listing={listing} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  return <></>;
}

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import type { Shop } from "../../../types/types";
import Listing from "./sub/Listing";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import useCarousel from "../../../hooks/carousel/useCarousel";
import { Loader, Text } from "@mantine/core";
import useShops from "../../../stores/useShops";
import SwipperNavButton from "./sub/SwipperNavButton";

interface Props {
  shop: Shop;
}
export default function ListingShop({ shop }: Props) {
  const {
    handleIndexChange,
    slides,
    swiperRef,
    slidesPerView,
    handleTouchEnd,
    isScrolling,
  } = useCarousel(shop.name);
  const { shops } = useShops();
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
          {shops[shop.name].hasFetchedAll && (
            <Text color="secondary">Tout visionné</Text>
          )}
        </div>
        <div className="2 flex w-full flex-wrap">
          <Swiper
            onTouchEnd={handleTouchEnd}
            className="select-none"
            modules={[Navigation, Thumbs, FreeMode]}
            onRealIndexChange={(swiper) => {
              handleIndexChange(swiper.realIndex);
            }}
            navigation={{
              prevEl: "#custom-prev-button",
              nextEl: "#custom-next-button",
            }}
            freeMode
            spaceBetween={10}
            slidesPerView={slidesPerView}
            watchSlidesProgress
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {slides.map((listing) => (
              <SwiperSlide key={listing.id}>
                <Listing listing={listing} isScrolling={isScrolling} />
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

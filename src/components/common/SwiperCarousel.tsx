import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Listing from "../search/listingsShop/sub/Listing";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import SwipperNavButton from "../search/listingsShop/sub/SwipperNavButton";
import useCarousel from "../../hooks/carousel/useCarousel";
import type { LandingListing, ShopListing } from "../../types/types";
import { detectShopListing } from "../../types/TypeDetection";
import type { MantineNumberSize } from "@mantine/core";
import useListingsInView from "../../hooks/search/useListingsInView";
interface Props {
  slides: ShopListing[] | LandingListing[]; //! add other types of slides
  handleIndexChange?: (index: number) => void;
  itemSize?: MantineNumberSize;
  landscapeImage?: boolean;
}

export default function SwiperCarousel({
  slides,
  handleIndexChange,
  itemSize,
  landscapeImage,
}: Props) {
  const { handleTouchEnd, isScrolling, swiperRef } = useCarousel();
  const listingsInView = useListingsInView();
  if (!listingsInView) return <></>;
  return (
    <div className="flex w-full flex-wrap">
      <Swiper
        onTouchEnd={handleTouchEnd}
        className="select-none"
        modules={[Navigation, Thumbs, FreeMode]}
        onRealIndexChange={(swiper) =>
          handleIndexChange && handleIndexChange(swiper.realIndex)
        }
        navigation={{
          prevEl: "#custom-prev-button",
          nextEl: "#custom-next-button",
        }}
        freeMode
        spaceBetween={10}
        slidesPerView={listingsInView}
        watchSlidesProgress
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((listing) => (
          <SwiperSlide
            key={detectShopListing(listing) ? listing.id : listing.title}
          >
            <Listing
              listing={listing}
              isScrolling={isScrolling}
              enlargeButton={detectShopListing(listing) ? true : false}
              size={itemSize}
              landscapeImage={landscapeImage}
            />
          </SwiperSlide>
        ))}
        <SwipperNavButton type="prev" />
        <SwipperNavButton type="next" />
      </Swiper>
    </div>
  );
}

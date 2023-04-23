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
interface Props {
  slides: ShopListing[] | LandingListing[]; //! add other types of slides
  handleIndexChange?: (index: number) => void;
}

export default function SwiperCarousel({ slides, handleIndexChange }: Props) {
  const { handleTouchEnd, isScrolling, slidesPerView, swiperRef } =
    useCarousel();
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
        slidesPerView={slidesPerView}
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
            />
          </SwiperSlide>
        ))}
        <SwipperNavButton type="prev" />
        <SwipperNavButton type="next" />
      </Swiper>
    </div>
  );
}

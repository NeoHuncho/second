import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Listing from "../search/listingsShop/sub/Listing";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import SwipperNavButton from "../search/listingsShop/sub/SwipperNavButton";
import useCarousel from "../../hooks/carousel/useCarousel";
import type { ShopListing } from "../../types/types";
interface Props {
    slides: ShopListing[];//! add other types of slides
    type: 'Shop' | 'Category'
    handleIndexChange?: (index: number) => void;
}
export default function SwiperCarousel({ slides, type, handleIndexChange }: Props) {

    const { handleTouchEnd, isScrolling, slidesPerView, swiperRef } = useCarousel()
    return (
        <div className="flex w-full flex-wrap">
            <Swiper
                onTouchEnd={handleTouchEnd}
                className="select-none"
                modules={[Navigation, Thumbs, FreeMode]}
                onRealIndexChange={(swiper) => handleIndexChange && handleIndexChange(swiper.realIndex)}
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
                {type === 'Shop' && slides.map((listing: ShopListing) => (
                    <SwiperSlide key={listing.id}>
                        <Listing listing={listing} isScrolling={isScrolling} />
                    </SwiperSlide>
                ))}
                <SwipperNavButton type="prev" />
                <SwipperNavButton type="next" />
            </Swiper>
        </div >
    )
}
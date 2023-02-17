import { useEffect, useRef, useState } from "react";
import type Swiper from "swiper";
import type { ShopListing, Shops } from "../../types/types";
import useShops from "../search/shops/useShops";

const useCarousel = (shop: Shops) => {
  const { updateListings } = useShops();
  const { listings, name: shopName } = useShops((state) => state.shops[shop]);

  const [slides, setSlides] = useState([] as ShopListing[]);

  const [loadingNewSlides, setLoadingNewSlides] = useState(false);
  const swiperRef = useRef<Swiper>();
  useEffect(() => {
    if (slides.length)
      setSlides([
        ...slides,
        ...listings.slice(slides.length, slides.length + 15),
      ]);
    else setSlides(listings.slice(0, 15));
    if (swiperRef.current) {
      swiperRef.current.update();
    }
    setLoadingNewSlides(false);
  }, [listings]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [slides]);

  const loadMoreSlides = () => {
    console.log("cld");
    const upcomingSlides = listings.slice(slides.length, slides.length + 15);
    const nextSlides = [...slides, ...upcomingSlides];
    setSlides(nextSlides);
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  };
  const handleIndexChange = (currentIndex: number) => {
    console.log("index changed", currentIndex, slides.length);

    if (currentIndex + 15 > listings.length && !loadingNewSlides) {
      setLoadingNewSlides(true);
      void updateListings(shopName);
    }
    if (currentIndex > slides.length - 12) {
      loadMoreSlides();
    }
  };

  return {
    slides,
    loadMoreSlides,
    swiperRef,
    handleIndexChange,
  };
};
export default useCarousel;

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

    setLoadingNewSlides(false);
  }, [listings]);

  const loadMoreSlides = () => {

    const upcomingSlides = listings.slice(slides.length, slides.length + 15);
    const nextSlides = [...slides, ...upcomingSlides];
    setSlides(nextSlides);
  };
  const handleIndexChange = (currentIndex: number) => {
    if (currentIndex + 15 > listings.length && !loadingNewSlides) {
      setLoadingNewSlides(true);
      void updateListings(shopName);
    }
    if (currentIndex > slides.length - 9) {
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

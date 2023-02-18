import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import type Swiper from "swiper";
import defaultListing from "../../static/defaultListing";
import type { ShopListing, Shops } from "../../types/types";
import useShops from "../search/shops/useShops";
import useBreakpoints from "../ui/useBreakpoints";

const useCarousel = (shop: Shops) => {
  const router = useRouter();
  const breakpoints = useBreakpoints();
  const { updateListings } = useShops();
  const {
    listings,
    name: shopName,
    hasFetchedAll,
  } = useShops((state) => state.shops[shop]);
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [slides, setSlides] = useState([] as ShopListing[]);

  const [loadingNewSlides, setLoadingNewSlides] = useState(false);
  const swiperRef = useRef<Swiper>();
  useEffect(() => {
    setLoadingNewSlides(false);

    if (slides.length) {
      return setSlides([
        ...slides,
        ...listings.slice(slides.length, slides.length + 15),
      ]);
    }
    if (!listings.length) return setSlides([]);
    const missingSlides = slidesPerView - listings.length;
    if (missingSlides > 0) {
      const placeHolderSlides = [];
      for (let i = 0; i < missingSlides; i++) {
        placeHolderSlides.push(defaultListing);
      }
      return setSlides([...listings, ...placeHolderSlides]);
    }
    setSlides([]);
    return setSlides([...listings.slice(0, 15)]);
  }, [listings]);

  useEffect(() => {
    if (router.query?.query) {
      setSlides([]);
    }
  }, [router.query]);

  const loadMoreSlides = () => {
    const upcomingSlides = listings.slice(slides.length, slides.length + 15);
    const nextSlides = [...slides, ...upcomingSlides];
    setSlides(nextSlides);
  };
  const handleIndexChange = (currentIndex: number) => {
    if (currentIndex + 15 > listings.length) {
      if (hasFetchedAll) return;
      if (!loadingNewSlides) {
        setLoadingNewSlides(true);
        void updateListings(shopName);
      }
    }
    if (currentIndex > slides.length - 9) {
      loadMoreSlides();
    }
  };

  useEffect(() => {
    if (!breakpoints.xxsBreakpoint) setSlidesPerView(1);
    else if (!breakpoints.xsBreakpoint) setSlidesPerView(2);
    else if (!breakpoints.smBreakpoint) setSlidesPerView(3);
    else if (!breakpoints.mdBreakpoint) setSlidesPerView(4);
    else if (!breakpoints.lgBreakpoint) setSlidesPerView(5);
    else if (!breakpoints.xlBreakpoint) setSlidesPerView(6);
    else if (!breakpoints.xxlBreakpoint) setSlidesPerView(7);
    else if (breakpoints.xxlBreakpoint) setSlidesPerView(8);
  }, [breakpoints]);
  console.log(slides);
  return {
    slides,
    loadMoreSlides,
    swiperRef,
    handleIndexChange,
    slidesPerView,
  };
};
export default useCarousel;

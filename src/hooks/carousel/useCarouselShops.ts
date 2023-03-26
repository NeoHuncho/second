import { useRouter } from "next/router";
import { useEffect,  useState } from "react";
import defaultListing from "../../static/defaultListing";
import type { ShopListing } from "../../types/types";
import useShops from "../../stores/useShops";
import type { ShopName } from "../../../common/types/types";
import useCarousel from "./useCarousel";

const useCarouselShops = (shop: ShopName) => {
  const router = useRouter();
  const { slidesPerView } = useCarousel() 
  const { updateListings } = useShops();
  const { listings, name, hasFetchedAll, status } = useShops(
    (state) => state.shops[shop]
  );
  const [slides, setSlides] = useState([] as ShopListing[]);

  const [loadingNewSlides, setLoadingNewSlides] = useState(false);

  useEffect(() => {
    setLoadingNewSlides(false);
    if (status === "loading") return;
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
        void updateListings(name);
      }
    }
    if (currentIndex > slides.length - 9) {
      loadMoreSlides();
    }
  };

  return {
    slides,
    loadMoreSlides,
    handleIndexChange,
  };
};
export default useCarouselShops;

import { useEffect, useRef, useState } from "react";
import type Swiper from "swiper";
import useBreakpoints from "../ui/useBreakpoints";

export default function useCarousel(){
      const swiperRef = useRef<Swiper>();
      const breakpoints = useBreakpoints();
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [isScrolling, setIsSrolling] = useState(false);
    const [lastTouchDiff, setLastTouchDiff] = useState(0);
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

  const handleTouchEnd = (e: Swiper) => {
    if (e.touches.diff === lastTouchDiff) return setIsSrolling(false);
    setIsSrolling(true);
    setLastTouchDiff(e.touches.diff);
  };
  return { slidesPerView, isScrolling, handleTouchEnd, swiperRef };
}
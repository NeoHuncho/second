import { useRef, useState } from "react";
import type Swiper from "swiper";

export default function useCarousel() {
  const swiperRef = useRef<Swiper>();
  const [isScrolling, setIsSrolling] = useState(false);
  const [lastTouchDiff, setLastTouchDiff] = useState(0);

  const handleTouchEnd = (e: Swiper) => {
    if (e.touches.diff === lastTouchDiff) return setIsSrolling(false);
    setIsSrolling(true);
    setLastTouchDiff(e.touches.diff);
  };
  return { isScrolling, handleTouchEnd, swiperRef };
}

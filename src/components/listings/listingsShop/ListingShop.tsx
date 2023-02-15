import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import type { Shop } from "../../../types/types";
import { useMediaQuery } from "@mantine/hooks";
import Listing from "./sub/Listing";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Breakpoints from "../../../styles/breakPoints";
import useBreakpoints from "../../../hooks/ui/useBreakpoints";

interface Props {
  shop: Shop;
}
export default function ListingShop({ shop }: Props) {
  const breakpoints = useBreakpoints();
  if (shop.status === "success")
    return (
      <div className="flex w-full flex-col gap-3 ">
        <div className="relative h-16 w-40 ">
          <Image
            className="object-contain"
            fill
            src={shop.image}
            alt={shop.name}
          />
        </div>
        <div className="2 flex w-full flex-wrap">
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            freeMode
            navigation
            spaceBetween={20}
            slidesPerView={
              !breakpoints.xxsBreakpoint
                ? 1
                : !breakpoints.xsBreakpoint
                ? 2
                : !breakpoints.smBreakpoint
                ? 3
                : !breakpoints.mdBreakpoint
                ? 4
                : !breakpoints.lgBreakpoint
                ? 5
                : !breakpoints.xlBreakpoint
                ? 6
                : !breakpoints.xxlBreakpoint
                ? 7
                : 8
            }
            watchSlidesProgress
          >
            {shop.listings.map((listing) => (
              <SwiperSlide key={listing.id}>
                {({ isVisible }) => (
                  <Listing listing={listing} inView={isVisible} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  return <></>;
}

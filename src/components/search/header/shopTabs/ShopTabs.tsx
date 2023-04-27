import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import type { Shop } from "../../../../types/types";
import useColorScheme from "../../../../hooks/ui/useColorTheme";
import useShops from "../../../../stores/state/useShops";

// Install Swiper modules

type ShopTabsProps = {
  shops: Shop[];
};

const ShopTabs: React.FC<ShopTabsProps> = ({ shops }) => {
  const { isDark } = useColorScheme();
  const { activeShop, setActiveShop } = useShops();
  return (
    <div className="relative  w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {shops.map((shop, index) => (
          <SwiperSlide
            key={index}
            className="!flex  !h-8 !w-28 !flex-col !justify-end"
          >
            <Image
              src={shop.image}
              fill
              className={`mb-2 cursor-pointer rounded-sm object-contain transition duration-300 ease-out hover:!opacity-100`}
              alt={`Store Logo ${index}`}
              style={{
                opacity: activeShop === shop.name ? 1 : 0.8,
              }}
              onClick={() => setActiveShop(shop.name)}
            />
            <div
              className={`absolute w-full transition duration-300 ease-out`}
              style={{
                bottom: "-9px",
                height: 5,
                backgroundColor: activeShop === shop.name ? shop.color : "",
              }}
            />
          </SwiperSlide>
        ))}
        <div
          className={`mt-1 h-1 w-full  ${
            isDark ? "bg-darkGrey" : "bg-lightGrey"
          }`}
        />
      </Swiper>
    </div>
  );
};

export default ShopTabs;

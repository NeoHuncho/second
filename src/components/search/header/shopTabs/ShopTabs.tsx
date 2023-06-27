import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import type { Shop } from "../../../../types/types";
import useColorTheme from "../../../../hooks/ui/useColorTheme";
import useShops from "../../../../stores/state/useShops";
import { motion } from "framer-motion";
import useValidShops from "../../../../hooks/search/useValidShops";
import { Loader, Switch, Text } from "@mantine/core";
import { appearMotion } from "../../../../animate/Animate";
import { Icon } from "../../../../assets/icons";
import type { ShopName } from "../../../../../common/types/types";
import useLocalStorage from "../../../../stores/useLocalStorage";
import useIsComponentVisible from "../../../../stores/state/useIsComponentVisible";
import { useInView } from "react-intersection-observer";
import useShopFilters from "../../../../stores/state/useShopFilters";
import {
  clothingShopOrder,
  defaultShopOrder,
  shoesShopOrder,
} from "../../../../static/storeOrder";
// Install Swiper modules

type ShopTabsProps = {
  noObserver?: boolean;
  className?: string;
};

const useIsVisible = (noObserver: boolean) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    rootMargin: "0px 0px 0px 0px",
  });
  const { setIsShopTabsVisible } = useIsComponentVisible();
  useEffect(() => {
    if (noObserver) return;
    if (inView) {
      setIsShopTabsVisible(true);
    } else {
      setIsShopTabsVisible(false);
    }
  }, [inView]);

  return ref;
};

const ShopStatus = ({ shop }: { shop: Shop }) => {
  const { validShopKeys: validShops } = useValidShops();
  if (!validShops.includes(shop.name))
    return (
      <motion.div
        className="flex items-center justify-center"
        {...appearMotion}
      >
        <Text className="text-xl" weight={600}>
          📦
        </Text>
      </motion.div>
    );
  if (shop.status === "waiting") return <></>;
  if (
    (shop.loadingNextPage && !shop.hasFetchedAll) ||
    shop.status === "loading"
  )
    return <Loader color={shop.color} size="sm" />;

  if (shop.status === "success")
    return (
      <motion.div
        className="flex items-center justify-center"
        {...appearMotion}
      >
        <Icon name="FillCheckCircle" color="green" size={25} />
      </motion.div>
    );
  if (shop.status === "no_results")
    return (
      <motion.div
        aria-label="Aucun résultat"
        className="flex items-center justify-center"
        {...appearMotion}
      >
        <Icon name="Error" size={25} />
      </motion.div>
    );
  return (
    <motion.div className="flex items-center justify-center" {...appearMotion}>
      <Icon name="FillWarning" size={25} />
    </motion.div>
  );
};

const ShopTabs: React.FC<ShopTabsProps> = ({
  noObserver = false,
  className = "",
}) => {
  const { isDark } = useColorTheme();
  const { filters } = useShopFilters();
  const {
    activeShop,
    setActiveShop,
    shops: storeShops,
    setShopOrder,
    shopOrder,
  } = useShops();
  const { validShopKeys: validShops } = useValidShops();
  const ref = useIsVisible(noObserver);
  const shops = [
    ...Object.values(storeShops).sort(
      (shopA, shopB) =>
        shopOrder.indexOf(shopA.name) - shopOrder.indexOf(shopB.name)
    ),
  ];

  return (
    <div
      className={`relative w-full ${className}`}
      ref={!noObserver ? ref : undefined}
    >
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
            className="!flex  !h-10 !w-36 !flex-col !justify-end"
          >
            {validShops.includes(shop.name) && shop.status !== "waiting" ? (
              <div
                onClick={() => setActiveShop(shop.name)}
                className="flex h-full w-full cursor-pointer items-center justify-between gap-2"
              >
                <Image
                  src={shop.image}
                  className={
                    "h-auto w-4/6  rounded-sm object-contain pl-2 transition duration-300 ease-out hover:!opacity-100"
                  }
                  alt={`Store Logo ${index}`}
                  style={{
                    opacity: activeShop === shop.name ? 1 : 0.8,
                  }}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                />
                <ShopStatus shop={shop} />
                <div
                  className={`absolute w-full transition duration-300 ease-out`}
                  style={{
                    bottom: "-9px",
                    height: 5,
                    backgroundColor: activeShop === shop.name ? shop.color : "",
                  }}
                />
              </div>
            ) : (
              <>
                <div className="flex h-full w-full cursor-not-allowed  gap-2">
                  <Image
                    src={shop.image}
                    className={`h-auto w-4/6 rounded-sm object-contain pl-2 opacity-50 `}
                    alt={`Store Logo ${index}`}
                  />
                  <ShopStatus shop={shop} />
                </div>
              </>
            )}
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

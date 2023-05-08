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
import { motion } from "framer-motion";
import useValidShops from "../../../../hooks/search/useValidShops";
import { Loader, Text } from "@mantine/core";
import { appearMotion } from "../../../../animate/Animate";
import { Icon } from "../../../../assets/icons";
import type { ShopName } from "../../../../../common/types/types";

// Install Swiper modules

type ShopTabsProps = {
  shops: Shop[];
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

const ShopTabs: React.FC<ShopTabsProps> = ({ shops }) => {
  const { isDark } = useColorScheme();
  const { activeShop, setActiveShop } = useShops();
  const { validShopKeys: validShops } = useValidShops();

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
            className="!flex  !h-10 !w-36 !flex-col !justify-end"
          >
            {validShops.includes(shop.name) ? (
              <div className="flex h-full w-full items-center gap-2">
                <Image
                  src={shop.image}
                  className={`h-auto w-4/6 cursor-pointer rounded-sm object-contain pl-2 transition duration-300 ease-out hover:!opacity-100`}
                  alt={`Store Logo ${index}`}
                  style={{
                    opacity: activeShop === shop.name ? 1 : 0.8,
                  }}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                  onClick={() => setActiveShop(shop.name)}
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

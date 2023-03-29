import Image from "next/image";
import type { Shop } from "../../../types/types";
import useCarouselShops from "../../../hooks/carousel/useCarouselShops";
import { Loader, Text } from "@mantine/core";
import useShops from "../../../stores/useShops";
import SwiperCarousel from "../../common/SwiperCarousel";

interface Props {
  shop: Shop;
}
export default function ListingShop({ shop }: Props) {
  const { handleIndexChange, slides, } = useCarouselShops(shop.name);
  const { shops } = useShops();
  if (shop.status === "success")
    return (
      <div className="flex w-full flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <div className="relative h-16 w-40 ">
            <Image
              className="object-contain"
              fill
              src={shop.image}
              alt={shop.name}
            />
          </div>
          {shops[shop.name].loadingNextPage &&
            !shops[shop.name].hasFetchedAll && <Loader color={shop.color} />}
          {shops[shop.name].hasFetchedAll && (
            <Text color="secondary">Tout visionné</Text>
          )}
        </div>
        <SwiperCarousel slides={slides} handleIndexChange={handleIndexChange} />
      </div>
    );
  return <></>;
}

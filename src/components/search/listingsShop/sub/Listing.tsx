import type { MantineNumberSize } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Loader,
  ActionIcon,
  Card,
  Image,
  Text,
  Title,
} from "@mantine/core";
import NextImage from "next/image";
import parsePrice from "../../../../utils/parsePrice";
import NoImage from "./NoImage";
import {
  detectShowcase,
  detectShopListing,
  detectChildShowcase,
} from "../../../../types/TypeDetection";
import RepairScoreIcon from "../../../../assets/repair-score-icon/RepairScoreIcon";
import { Icon } from "../../../../assets/icons";
import useSearchParams from "../../../../stores/state/useSearchParams";
import type { LandingListing, ShopListing } from "../../../../types/types";
import ExpandImage from "../../../image/ExpandImage";

type Props = {
  listing: ShopListing | LandingListing;
  isScrolling: boolean;
  enlargeButton?: boolean;
  size?: MantineNumberSize;
  landscapeImage?: boolean;
  loadImage?: boolean;
  rootClassName?: string;
};

const Listing = ({
  listing,
  isScrolling,
  enlargeButton,
  size,
  landscapeImage,
  loadImage = true,
  rootClassName = "",
}: Props) => {
  const router = useRouter();
  const CARD_SECTION_HEIGHT = size === "sm" ? 160 : 240;
  const [isZoomed, setIsZoomed] = useState(false);
  const isShopListing = detectShopListing(listing);
  const isShowcase = detectShowcase(listing);
  const isShowcaseChild = detectChildShowcase(listing);
  const [showModal, modalHandlers] = useDisclosure(false);
  const { setSearchTerm } = useSearchParams();

  if (listing.body === "placeholder") {
    return (
      <Card
        className={`h-full w-full`}
        shadow="sm"
        p="sm"
        withBorder
        radius="md"
      >
        <div className="opacity-0">
          !fixes rendering bug of placeholder card!
        </div>
      </Card>
    );
  }

  const onClick = () => {
    if (isScrolling) {
      return null;
    }

    if (isShopListing) {
      window.open(listing.url, "_blank");
      return;
    }

    if (listing.children) {
      modalHandlers.open();
      return;
    }

    setSearchTerm(listing.title);
    void router.push(listing.url);
  };

  return (
    <div className={rootClassName}>
      <Card
        className={`h-full  cursor-pointer`}
        shadow="sm"
        p="sm"
        radius="md"
        withBorder
        onClick={onClick}
      >
        <Card.Section>
          {isShopListing && listing.images?.url_thumb ? (
            <div>
              {enlargeButton && (
                <ActionIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsZoomed(true);
                  }}
                  color="gray"
                  variant="filled"
                  className="absolute right-0 top-0 z-10 mt-2 mr-2"
                >
                  <Icon name="Enlarge" size={14} color="white" />
                </ActionIcon>
              )}
              {loadImage ? (
                <Image
                  height={CARD_SECTION_HEIGHT}
                  src={listing.images.url_thumb}
                  alt={listing.title}
                />
              ) : (
                <div
                  className="flex w-full items-center justify-center"
                  style={{ height: CARD_SECTION_HEIGHT }}
                >
                  <Loader />
                </div>
              )}
              <Title className="absolute right-0 -mt-7 rounded-tl-lg bg-white px-2 text-xl text-black">
                {parsePrice(listing.price)}
              </Title>
            </div>
          ) : (
            !isShopListing && (
              <div className="flex  justify-center ">
                <NextImage
                  src={listing.image}
                  alt={listing.title}
                  height={CARD_SECTION_HEIGHT}
                  className={`object-contain py-2 ${
                    landscapeImage ? "px-10" : ""
                  }`}
                />
              </div>
            )
          )}
        </Card.Section>

        <div className="flex  flex-col gap-3 ">
          <Title
            lineClamp={2}
            style={{ minHeight: 32 }}
            className={`mt-3 ${size === "sm" ? "text-xs" : "text-sm"}`}
          >
            {listing.title}
          </Title>

          <div className="flex flex-col" style={{ minHeight: 40 }}>
            {isShopListing && listing.condition && (
              <div className="flex items-center gap-1">
                <Icon name="OutlineEye" className="mt-0.5" />
                <Text lineClamp={1} className=" mt-1 text-xs ">
                  {listing.condition}
                </Text>
              </div>
            )}

            {isShopListing && listing.size && (
              <div className="flex items-center gap-1">
                <Icon name="Clothes" className="mt-0.5" />
                <Text lineClamp={1} className=" mt-1 text-xs ">
                  {listing.size}
                </Text>
              </div>
            )}

            {isShopListing && (
              <div className="flex items-center gap-1">
                <Icon name="TruckDelivery" className="mt-0.5" />
                <Text lineClamp={1} className=" mt-1 text-xs ">
                  {listing.shippable
                    ? "Livraison possible"
                    : "Pas de livraison"}
                </Text>
              </div>
            )}

            {isShowcaseChild && listing.priceRange && (
              <div className="-mt-5 flex ">
                <Icon name={"FillDollar"} color="green" />
                <Icon
                  name={listing.priceRange > 1 ? "FillDollar" : "OutlineDollar"}
                  color={listing.priceRange > 1 ? "green" : undefined}
                />
                <Icon
                  name={listing.priceRange > 2 ? "FillDollar" : "OutlineDollar"}
                  color={listing.priceRange > 2 ? "green" : undefined}
                />
              </div>
            )}

            {isShowcase && (
              <RepairScoreIcon
                className="absolute bottom-1 w-2/5 place-self-center"
                repairScore={listing.repairScore}
              />
            )}
          </div>
        </div>
      </Card>

      {isShopListing && (
        <ExpandImage
          alt={listing.title}
          opened={isZoomed}
          setOpened={setIsZoomed}
          src={listing.images.url}
        />
      )}

      <Modal
        opened={showModal}
        size={
          isShowcase && listing.children?.length
            ? listing.children.length <= 2
              ? "md"
              : "lg"
            : "lg"
        }
        onClose={modalHandlers.close}
      >
        <div className="flex flex-wrap justify-around gap-3">
          {isShowcase &&
            listing.children &&
            listing.children.map((child) => (
              <Listing
                rootClassName={"w-40"}
                isScrolling={false}
                key={child.url}
                listing={child}
                size="sm"
              />
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default Listing;

import { Button, Card, Image, Loader, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import type { ShopListing } from "../../../../types/types";
import NoImage from "./NoImage";

type Props = {
  listing: ShopListing;
  inView: boolean;
};
const Listing = ({ listing, inView }: Props) => {
  const CARD_SECTION_HEIGHT = 230;
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  useEffect(() => {
    if (inView && !hasBeenSeen) setHasBeenSeen(true);
  }, [inView]);
  return (
    <Card
      className="h-full cursor-pointer"
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
    >
      <Card.Section>
        {hasBeenSeen ? (
          listing.images?.url_thumb ? (
            <Image
              height={CARD_SECTION_HEIGHT}
              src={listing.images.url_thumb}
              alt={listing.title}
            />
          ) : (
            <NoImage />
          )
        ) : (
          <div
            style={{ height: CARD_SECTION_HEIGHT}}
            className="flex w-full flex-col items-center justify-center"
          >
            <Loader className="m-auto " />
          </div>
        )}
        {listing.price && (
          <Title className="absolute right-0 -mt-7 rounded-tl-lg bg-white px-2 text-xl">{`${
            listing.price?.toString() || ""
          } €`}</Title>
        )}
      </Card.Section>
      <div className="flex  flex-col gap-3 ">
        <Title
          lineClamp={2}
          style={{ minHeight: 32 }}
          className="mt-3 text-xs "
        >
          {listing.title}
        </Title>
        <Button
          onClick={() => window.open(listing.url, "_blank")}
          variant="outline"
          color={"secondary"}
        >
          {`Voir l'annonce`}
        </Button>
      </div>
    </Card>
  );
};
export default Listing;

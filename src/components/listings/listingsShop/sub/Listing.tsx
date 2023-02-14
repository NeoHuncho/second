import { Card, Image, Loader, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import type { ShopListing } from "../../../../types/types";
import NoImage from "./NoImage";

type Props = {
  listing: ShopListing;
  inView: boolean;
};
const Listing = ({ listing, inView }: Props) => {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");
  const router = useRouter();
  return (
    <Card
      onClick={() => window.open(listing.url, "_blank")}
      className="h-full cursor-pointer"
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
    >
      <Card.Section>
        {inView ? (
          listing.images?.url_thumb ? (
            <Image
              height={!smallBreakpoint ? 150 : 200}
              src={listing.images.url_thumb}
              alt={listing.title}
            />
          ) : (
            <NoImage />
          )
        ) : (
          <div
            style={{ height: !smallBreakpoint ? 150 : 200 }}
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
        <Title lineClamp={2} className="mt-3 text-xs ">
          {listing.title}
        </Title>
      </div>
    </Card>
  );
};
export default Listing;

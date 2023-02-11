import { Card, Image, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { ShopListing } from "../../../../types/types";

type Props = {
  listing: ShopListing;
};
const Listing = ({ listing }: Props) => {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");
  return (
    <Card className="h-full" shadow="sm" p="sm" radius="md" withBorder>
      <Card.Section>
        <Image
          height={!smallBreakpoint ? 150 : 200}
          src={listing.image}
          alt={listing.title}
        />
        <Title className="absolute right-0 -mt-7 rounded-tl-lg bg-white px-2 text-xl">{`${listing.price} €`}</Title>
      </Card.Section>
      <div className="flex h-full flex-col gap-3 ">
        <Title lineClamp={2} className="mt-3 text-sm sm:text-lg">
          {listing.title}
        </Title>
      </div>
    </Card>
  );
};
export default Listing;

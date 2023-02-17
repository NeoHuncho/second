import { Button, Card, Image, Loader, Title } from "@mantine/core";
import { LinkIcon } from "../../../../assets/icons";
import type { ShopListing } from "../../../../types/types";
import parsePrice from "../../../../utils/parsePrice";
import NoImage from "./NoImage";

type Props = {
  listing: ShopListing;
};
const Listing = ({ listing }: Props) => {
  const CARD_SECTION_HEIGHT = 230;
  

  return (
    <Card
      className="h-full cursor-pointer"
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
    >
      <Card.Section>
        {listing.images?.url_thumb ? (
          <Image
            height={CARD_SECTION_HEIGHT}
            src={listing.images.url_thumb}
            alt={listing.title}
          />
        ) : (
          <NoImage />
        )}
        <Title className="absolute right-0 -mt-7 rounded-tl-lg bg-white px-2 text-xl">
          {parsePrice(listing.price)}
        </Title>
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
          leftIcon={<LinkIcon color="#156969" />}
          styles={{ root: { padding: 10 }, leftIcon: { marginRight: 5 } }}
        >
          {`Voir l'annonce`}
        </Button>
      </div>
    </Card>
  );
};
export default Listing;

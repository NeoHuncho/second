import type { MantineNumberSize } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { Icon } from "../../../../assets/icons";
import useSearchParams from "../../../../stores/state/useSearchParams";
import { detectShopListing } from "../../../../types/TypeDetection";
import type {
  FavoriteListing,
  LandingListing,
  ShopListing,
} from "../../../../types/types";
import { api } from "../../../../utils/api";

type Props = {
  listing: ShopListing | LandingListing | FavoriteListing;
  isScrolling: boolean;
  enlargeButton?: boolean;
  size?: MantineNumberSize;
  landscapeImage?: boolean;
  rootClassName?: string;
};

const FavoriteButton = ({
  listing,
}: {
  listing: ShopListing | LandingListing;
}) => {
  const isShopListing = detectShopListing(listing);
  const { searchTerm } = useSearchParams();
  const createFavoriteMutation = api.favorites.createFavorite.useMutation();
  const deleteFavoriteMutation = api.favorites.deleteFavorite.useMutation();
  const getFavoriteQuery = api.favorites.getFavorite.useQuery(
    {
      url: listing.url,
    },
    { enabled: false }
  );

  const createFavorite = () => {
    if (!isShopListing) return;
    setHasClicked(true);
    createFavoriteMutation.mutate(
      {
        title: listing.title,
        url: listing.url,
        price: listing.price,
        imgUrl: listing.images.url,
        thumbUrl: listing.images.url_thumb,
        searchTerm: searchTerm,
        deliveryMethod: listing.shippable ? "shipping" : "pickup",
      },
      {
        onSuccess: (data) => {
          setCreatedId(data.id);
        },
        onError: (err) => {
          if (err.shape?.code === -32603) {
            getFavoriteQuery
              .refetch()
              .then((data) => {
                if (!data?.data?.id) return;
                setCreatedId(data.data.id);
              })
              .catch(() => {
                notifications.show({
                  message:
                    "Une erreur est survenue lors de la création du favori.",
                  color: "red",
                });
                setHasClicked(false);
              });
          } else {
            notifications.show({
              message: "Une erreur est survenue lors de la création du favori.",
              color: "red",
            });
            setHasClicked(false);
          }
        },
      }
    );
  };
  const deleteFavorite = () => {
    if (!isShopListing || !createdId) return;
    deleteFavoriteMutation.mutate(
      {
        id: createdId,
      },
      {
        onSuccess: () => {
          setCreatedId(null);
          setHasClicked(false);
        },
      }
    );
  };

  const [createdId, setCreatedId] = useState<null | number>(null);
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <ActionIcon
      onClick={(event) => {
        event.stopPropagation();
        if (!createdId) createFavorite();
        deleteFavorite();
      }}
      color="gray"
      variant="filled"
      className="absolute left-2 top-0 z-10 mr-2 mt-2"
    >
      <Icon name="FillHeart" size={14} color={hasClicked ? "red" : "white"} />
    </ActionIcon>
  );
};

export default FavoriteButton;

import { api } from "../utils/api";
import { Loader, Title } from "@mantine/core";
import InfiniteScroll from "react-infinite-scroller";
import Listing from "../components/search/listingsShop/sub/Listing";
import useListingsInView from "../hooks/search/useListingsInView";
import type { Favorite } from "@prisma/client";
import type { FavoriteListing } from "../types/types";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    data,
    fetchNextPage,
    isLoading: isLoadingQuery,
  } = api.favorites.getFavorites.useInfiniteQuery(
    {
      take: 20,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!data?.pages[0]?.items.length) return;
    if (data?.pages[0]?.items.length < 19) setHasMore(false);
  }, [data]);
  const favorites = data?.pages?.flatMap((page) => page.items);
  const listingsInView = useListingsInView();
  const fetchNext = async () => {
    if (isLoadingQuery || !hasMore || isLoading) return;
    setIsLoading(true);
    await fetchNextPage();
    if (!data?.pages[data.pages.length - 1]?.items.length) setHasMore(false);
    setIsLoading(false);
  };

  if (!favorites) return <Loader />;
  if (favorites.length === 0 && !isLoadingQuery)
    return (
      <div>
        <Title order={4} align="center">
          Vous n&apos;avez pas encore de favoris 😊
        </Title>
      </div>
    );

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={() => void fetchNext()}
      hasMore={hasMore}
      loader={
        <div className="my-5 flex w-full items-center justify-center">
          <Loader />
        </div>
      }
      threshold={450}
    >
      <Title order={4} className="mb-6" align="center">
        Favoris
      </Title>
      <div
        className={`grid w-full gap-3`}
        style={{
          gridTemplateColumns: `repeat(${listingsInView}, minmax(0, 1fr))`,
        }}
        key="listings"
      >
        {favorites.map((listing) => (
          <Listing
            key={listing.id}
            isScrolling={false}
            listing={parseFavoriteToListing(listing)}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}

const parseFavoriteToListing = (favorite: Favorite): FavoriteListing => {
  return {
    id: favorite.id,
    title: favorite.title,
    images: {
      url: favorite.imgUrl,
      url_thumb: favorite.thumbUrl,
    },
    price: favorite.price,
    deliveryMethod: favorite.deliveryMethod,
    type: "favorite",
    url: favorite.url,
  };
};

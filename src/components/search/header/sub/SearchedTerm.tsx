import { Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

function SearchTerm() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-wrap overflow-hidden sm:flex-row sm:items-center sm:gap-1">
      <Title className="text-xs font-light sm:text-xl">Recherche:</Title>
      <Text lineClamp={1} className="text-sm font-normal  sm:text-xl">
        {router?.query?.query || ""}
      </Text>
    </div>
  );
}

export default SearchTerm;

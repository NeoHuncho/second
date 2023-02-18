import { Title } from "@mantine/core";
import { useRouter } from "next/router";

function SearchTerm() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Title className="text-lg font-light sm:text-xl">Recherche:</Title>
      <Title className="text-lg font-normal  sm:text-xl">
        {router?.query?.query || ""}
      </Title>
    </div>
  );
}

export default SearchTerm;

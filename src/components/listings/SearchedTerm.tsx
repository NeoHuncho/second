import { Title } from "@mantine/core";
import useSearch from "../../hooks/search/useSearch";

function SearchTerm() {
  const { searchTerm } = useSearch();

  return (
    <div className="flex items-center gap-2">
      <Title className="text-lg font-light sm:text-xl">Recherche:</Title>
      <Title className="text-lg font-normal  sm:text-xl">{searchTerm}</Title>
    </div>
  );
}

export default SearchTerm;

import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSuggestedCat } from "../../requests/backend";
import type { SearchResult } from "../../requests/services";
import { getSearchAutocomplete } from "../../requests/services";
import useSearchParams from "../../stores/useSearchParams";
import useSuggestedCat from "../../stores/useSuggestedCat";

const useCompletion = () => {
  const router = useRouter();
  const { setSearchTerm: setSearchTermStore, searchTerm: searchTermStore } =
    useSearchParams();

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebouncedState(
    "",
    500
  );
  const { setSuggestedCat, setSuggest } = useSuggestedCat();
  const [completionResults, setCompletionResults] = useState<SearchResult[]>(
    []
  );
  const [searching, setSearching] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState(searchTermStore);

  const onSubmit = async (searchTermOverride?: string) => {
    if (!searchTermOverride && !searchTerm) return;
    const suggestedCat = await getSuggestedCat(
      searchTermOverride || searchTerm
    );
    setSearchTerm(searchTermOverride || searchTerm);
    setSearchTermStore(searchTermOverride || searchTerm);
    setCompletionResults([]);
    setSuggestedCat(suggestedCat.data.suggestedCat);
    setSuggest(suggestedCat.data.suggest);
    void router.push({
      pathname: "/search",
      query: { query: searchTermOverride || searchTerm },
    });
  };

  const search = async (term: string) => {
    setSearching(true);
    const results = await getSearchAutocomplete(term);
    setSearching(false);
    return results.data.suggestions;
  };

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      search(debouncedSearchTerm)
        .then((results) => {
          setCompletionResults(results);
        })
        .catch((err) => console.log(err));
    }
  }, [debouncedSearchTerm]);

  const [inputInFocus, focusHandlers] = useDisclosure(false);
  return {
    completionResults,
    searching,
    setDebouncedSearchTerm,
    onSubmit,
    setSearchTerm,
    searchTerm,
    inputInFocus,
    focusHandlers,
  };
};
export default useCompletion;

import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSuggestedCat } from "../../requests/backend";
import type { SearchResult } from "../../requests/services";
import { getSearchAutocomplete } from "../../requests/services";
import useSearchParams from "../../stores/state/useSearchParams";
import useSuggestedCat from "../../stores/state/useSuggestedCat";
import useShops from "../../stores/state/useShops";

const useCompletion = () => {
  const router = useRouter();
  const { setSearchTerm: setSearchTermStore, searchTerm: searchTermStore } =
    useSearchParams();

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebouncedState(
    "",
    500
  );
  const { setSuggestedCat } = useSuggestedCat();
  const [completionResults, setCompletionResults] = useState<SearchResult[]>(
    []
  );
  const {filters}= useShops()
  const [loading, setLoading] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState(searchTermStore);

  const getAndSetSuggestedCat = async (term: string) => {
    const suggestedCat = await getSuggestedCat(term);
    setSuggestedCat(suggestedCat.data);
  };
      

  const onSubmit = async (searchTermOverride?: string) => {
    setLoading(true)
    if (!searchTermOverride && !searchTerm) return;
    setSearchTerm(searchTermOverride || searchTerm);
    if(!filters.category || filters.category==='all') await getAndSetSuggestedCat(searchTermOverride || searchTerm);
    setSearchTermStore(searchTermOverride || searchTerm);
    setCompletionResults([]);
    const {query, ...cleanedQuery}= router.query;
    setLoading(false)
    void router.push({
      pathname: "/search",
      query: { query: searchTermOverride || searchTerm, ...cleanedQuery },
      
    });
  };

  const search = async (term: string) => {
    const results = await getSearchAutocomplete(term);
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
    loading,
    setDebouncedSearchTerm,
    onSubmit,
    setSearchTerm,
    searchTerm,
    inputInFocus,
    focusHandlers,
  };
};
export default useCompletion;

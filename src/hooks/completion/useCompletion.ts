import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSearchTerm from "../../stores/useSearchTerm";
import useSuggestedCat from "../../stores/useSuggestedCat";
import formatApiUrl from "../../utils/url/formatApiUrl";

export type SearchResult = {
  value: string;
  id: string;
};

export type SearchResultResponse = {
  suggestions: SearchResult[];
};

export type suggestedCatResponse = {
  suggestedCat: string;
  suggest: boolean;
};

const useCompletion = () => {
  const router = useRouter();
  const { setSearchTerm: setSearchTermStore, searchTerm: searchTermStore } =
    useSearchTerm();

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
    const suggestedCat = await axios.get<suggestedCatResponse>(
      formatApiUrl({
        routeName: "getSuggestedCat",
        params: `text=${searchTerm}`,
      })
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
    const results = await axios.get<SearchResultResponse>(
      `https://completion.amazon.fr/api/2017/suggestions?limit=6&prefix=${term}&alias=aps&last-prefix=heliu&mid=A13V1IB3VIYZZH&site-variant=desktop`
    );
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

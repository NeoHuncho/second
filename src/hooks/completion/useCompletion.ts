import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type SearchResult = {
  value: string;
  id: string;
};

export type SearchResultResponse = {
  suggestions: SearchResult[];
};

const useCompletion = () => {
  const router = useRouter();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebouncedState(
    "",
    500
  );
  const [completionResults, setCompletionResults] = useState<SearchResult[]>(
    []
  );
  const [searching, setSearching] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (searchTermOverride?: string) => {
    if (!searchTermOverride && !searchTerm) return;
    void router.push(`/search?query=${searchTermOverride || searchTerm}`);
    setSearchTerm(searchTermOverride || searchTerm);
    setCompletionResults([]);
    return;
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

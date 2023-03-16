import axios from "axios";

export type SearchResult = {
  value: string;
  id: string;
};

export type SearchResultResponse = {
  suggestions: SearchResult[];
};

const getSearchAutocomplete = async (term: string) =>
  await axios.get<SearchResultResponse>(
    `https://completion.amazon.fr/api/2017/suggestions?limit=6&prefix=${term}&alias=aps&last-prefix=heliu&mid=A13V1IB3VIYZZH&site-variant=desktop`
  );

export { getSearchAutocomplete };

import { useRouter } from "next/router";

const useSearch = () => {
  if (typeof window === "undefined") {
    return { apiUrl: "", searchTerm: "", encodedSearchTerm: "" };
  }
  const router = useRouter();
  const searchTerm = (router.query?.query as string) || "";
  const apiUrl = (window && `${window.location.origin}/api`) || "";
  return {
    apiUrl,
    searchTerm,
    encodedSearchTerm: encodeURIComponent(searchTerm),
  };
};
export default useSearch;

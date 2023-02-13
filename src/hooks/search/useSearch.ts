import { useRouter } from "next/router";

const useSearch = () => {
  const router = useRouter();
  if (typeof window === "undefined") {
    return { apiUrl: "", searchTerm: "", encodedSearchTerm: "" };
  }
  const searchTerm = (router.query?.query as string) || "";
  const apiUrl = (window && `${window.location.origin}/api`) || "";
  return {
    apiUrl,
    searchTerm,
    encodedSearchTerm: encodeURIComponent(searchTerm),
  };
};
export default useSearch;

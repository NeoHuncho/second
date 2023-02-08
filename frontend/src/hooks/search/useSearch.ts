import { useRouter } from "next/router";

const useSearch = () => {
  const router = useRouter();
  const searchTerm = router.query?.query;
  return { searchTerm };
};
export default useSearch;

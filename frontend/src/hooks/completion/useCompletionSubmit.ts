import { useRouter } from "next/router";
import { useState } from "react";

const useCompletionSubmit = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (searchTermOverride?: string) => {
    void router.push(`/search?query=${searchTermOverride || searchTerm}`);
    return;
  };
  return { onSubmit, setSearchTerm };
};

export default useCompletionSubmit;

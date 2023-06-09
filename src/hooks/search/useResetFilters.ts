import { useRouter } from "next/router";
import { useEffect } from "react";
import useShopsFilters from "../../stores/state/useShopFilters";

const useResetFilters = () => {
  const router = useRouter();
  const { resetFilters } = useShopsFilters();
  useEffect(() => {
    if (router.pathname === "/") resetFilters();
  }, [router.pathname]);
};

export default useResetFilters;

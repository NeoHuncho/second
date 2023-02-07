import useLeboncoin from "./useLeboncoin";
import useVinted from "./useVinted";

const useShops = () => {
  const { currentShop: leboncoin } = useLeboncoin();
  const { currentShop: vinted } = useVinted();
  return { leboncoin, vinted}
};

export default useShops;

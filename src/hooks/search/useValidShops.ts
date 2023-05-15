import useShops from "../../stores/state/useShops";
import useLocalStorage from "../../stores/useLocalStorage";

const useValidShops = () => {
  const { deliveryMethod } = useLocalStorage();
  const { shops } = useShops();
  const validShops = Object.entries(shops).filter(([key, values]) => {
    if (deliveryMethod === "location" && values.isDeliveryOnly) return false;
    return true;
  });

  return {
    validShopKeys: Object.values(validShops).map(([key]) => key),
    validShopsValues: Object.values(validShops).map(([, value]) => value),
  };
};
export default useValidShops;

import useShops from "../../stores/state/useShops";
import usePersistentSearchParams from "../../stores/storage/usePersistentSearchParams"

const useValidShops = () => {
    const {deliveryMethod} = usePersistentSearchParams()
    const {shops} = useShops()
    const validShops = Object.entries(shops).filter(
      ([key, values]) => {
        if(deliveryMethod!=='delivery' && values.isDeliveryOnly)
        return false;
        return true;
      }
    );
    
    return {validShopKeys: Object.values(validShops).map(([key,])=> key), validShopsValues: Object.values(validShops).map(([,value])=>value)}
}
export default useValidShops
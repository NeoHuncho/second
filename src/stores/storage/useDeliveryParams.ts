import { useLocalStorage } from "@mantine/hooks"

const useDeliveryParams=()=>{
    const [locationRange,setLocationRange]= useLocalStorage({key:"locationRange",defaultValue:0})
    const [deliveryMethod,setDeliveryMethod]= useLocalStorage({key:"deliveryMethod",defaultValue:"delivery"})
    const [address,setAddress]= useLocalStorage({key:"address",defaultValue:""})
    const [addressCoords,setAddressCoords]= useLocalStorage({key:"addressCoords",defaultValue:{lat:0,lng:0}})
    return {locationRange,setLocationRange,deliveryMethod,setDeliveryMethod,address,setAddress,addressCoords,setAddressCoords}
}
export default useDeliveryParams
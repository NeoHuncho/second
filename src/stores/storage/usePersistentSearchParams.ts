import { useLocalStorage } from "@mantine/hooks"
import type { DeliveryMethod } from "../../../common/types/types";
import type { Category } from "../../../common/types/types"
import { useStore } from "zustand";
import { useEffect, useState } from "react";

type AddressCoords={
    lat:number
    lng:number
}

const useDeliveryParams=()=>{
    const [locationRange,setLocationRange]= useLocalStorage({key:"locationRange",defaultValue:0})
    const [deliveryMethod,setDeliveryMethod]= useLocalStorage<DeliveryMethod>({key:"deliveryMethod",defaultValue:"delivery"})
    const [address,setAddress]= useLocalStorage({key:"address",defaultValue:""})
    const [addressCoords,setAddressCoords]= useLocalStorage<AddressCoords>({key:"addressCoords",defaultValue:{lat:0,lng:0}})
    const [category, setCategory] = useLocalStorage<Category|'all'>({key:"category",defaultValue:"all"})
    const [deliveryParamsChanged,setDeliveryParamsChanged]= useState(0)
    useEffect(()=>{
      setDeliveryParamsChanged(deliveryParamsChanged+1)
    },[locationRange,deliveryMethod,address,addressCoords,category])
    return {locationRange,setLocationRange,deliveryMethod,setDeliveryMethod,address,setAddress,addressCoords,setAddressCoords, category,setCategory,deliveryParamsChanged,setDeliveryParamsChanged}
}
export default useDeliveryParams
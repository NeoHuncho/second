import { useRouter } from "next/router"
import { useEffect } from "react"
import useShops from "../../stores/state/useShops"

const useResetFilters=()=>{
const router=useRouter()
const {resetFilters}= useShops()
useEffect(() => {
    if(router.pathname==='/')
    resetFilters();
},[router.pathname])
}

export default useResetFilters
import { useState } from "react"

const useLocation =()=>{
    const [deliveryMethod, setDeliveryMethod] = useState<string>('delivery')

    return {deliveryMethod, setDeliveryMethod}
}
export default useLocation
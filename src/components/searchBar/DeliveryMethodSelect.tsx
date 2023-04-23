import type { MantineSize } from "@mantine/core";
import { Select } from "@mantine/core";
import useSearchParams from "../../stores/state/useSearchParams";
import type { DeliveryMethod } from "../../../common/types/types";
import { deliveryMethods } from "../../../common/keys/keys";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import { useEffect, useState } from "react";
import useDeliveryParams from "../../stores/storage/usePersistentSearchParams";

type Props = {
    size: MantineSize;
}
export default function DeliveryMethodSelect({ size }: Props) {
    const { setDropdownOpen, setHasClickedDeliverySelect } = useSearchParams();
    const { deliveryMethod, setDeliveryMethod, address, locationRange } = useDeliveryParams();
    const { isMobile } = useBreakpoints();
    const [data, setData] = useState<{ label: string, value: DeliveryMethod }[]>([])

    useEffect(() => {
        setData(Object.entries(deliveryMethods).map(([key, value]) => ({ label: value, value: key as DeliveryMethod })))
    }, [])

    useEffect(() => {
        if (address)
            setData((data) => data.map((item) => {
                if (item.value !== 'location') return item;
                return ({
                    ...item, label: `${address} (${locationRange}km)📍`
                })
            }))
    }, [address])

    useEffect(() => {
        if (address)
            setData((data) => data.map((item) => {
                if (item.value !== 'location') return item;
                return ({
                    ...item, label: `${address} (${locationRange}km) 📍`
                })
            }))
    }, [locationRange])

    return (
        <Select
            className="ml-2 w-full"
            size={size}
            radius={"sm"}
            data={data}
            value={deliveryMethod}
            onChange={(value) => setDeliveryMethod(value as DeliveryMethod)}
            placeholder="Choisissez une méthode de livraison"
            onDropdownOpen={() => {
                setDropdownOpen(true)
                setHasClickedDeliverySelect(true)
            }}
            onDropdownClose={() => setDropdownOpen(false)}
        />
    )

}
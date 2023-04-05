import type { MantineSize } from "@mantine/core";
import { Select } from "@mantine/core";
import useSearchParams from "../../stores/useSearchParams";
import type { DeliveryMethod } from "../../../common/types/types";
import { deliveryMethods } from "../../../common/keys/keys";
import useBreakpoints from "../../hooks/ui/useBreakpoints";

type Props = {
    size: MantineSize;
}
export default function DeliveryMethodSelect({ size }: Props) {
    const { deliveryMethod, setDeliveryMethod, setDropdownOpen } = useSearchParams();
    const { isMobile } = useBreakpoints();
    const data = Object.entries(deliveryMethods).map(([key, value]) => ({
        label: value,
        value: key,
    }));
    return (
        <Select

            className="ml-2 w-44 sm:w-full"
            size={isMobile ? 'sm' : size}
            radius={"sm"}
            data={data}
            value={deliveryMethod}
            onChange={(value) => setDeliveryMethod(value as DeliveryMethod)}
            placeholder="Choisissez une méthode de livraison"
            //console log when opened
            onDropdownOpen={() => setDropdownOpen(true)}
            onDropdownClose={() => setDropdownOpen(false)}
        />
    )

}
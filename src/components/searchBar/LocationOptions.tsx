import useSearchParams from "../../stores/state/useSearchParams";
import AddressDropdown from "./AddressDropdown";
import useColorScheme from "../../hooks/ui/useColorTheme";
import { useEffect, useRef, useState } from "react";
import useDeliveryParams from "../../stores/storage/usePersistentSearchParams";
import AddressRangeSlider from "./AddressRangeSlider";
import { ActionIcon } from "@mantine/core";
import { Icon } from "../../assets/icons";

const LocationOptions = () => {
    const { dropdownOpen, hasClickedDeliverySelect } = useSearchParams();
    const { deliveryMethod } = useDeliveryParams();
    const { isLight } = useColorScheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setIsOpen(deliveryMethod !== 'delivery' && !dropdownOpen && hasClickedDeliverySelect)
    }, [deliveryMethod, dropdownOpen])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])



    if (!isOpen) return null;
    return (
        <div ref={dropdownRef} className="absolute bg-white p-4 rounded-md sm:-ml-5 mt-2 z-10" style={!isLight ? { background: '#25262B' } : { background: '#fff' }}>
            <div className="flex flex-col gap-5 items-center  w-full justify-center">
                <ActionIcon onClick={() => setIsOpen(false)} className="absolute right-0 top-0">
                    <Icon name="Close" />
                </ActionIcon>
                <AddressDropdown />
                <AddressRangeSlider />
            </div>
        </div>

    )
}
export default LocationOptions;
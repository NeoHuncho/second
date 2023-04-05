import { Button, Slider, Text, TextInput } from "@mantine/core";
import useSearchParams from "../../stores/useSearchParams";
import AddressDropdown from "./AddressDropdown";
import useColorScheme from "../../hooks/ui/useColorTheme";

const LocationOptions = () => {
    const { deliveryMethod, addressConfirmed, setAddressConfirmed,dropdownOpen } = useSearchParams();
    const { isLight, } = useColorScheme();
    const MARKS = [
        { value: 0, label: '0 km' },
        { value: 15, label: '5 km' },
        { value: 30, label: '10 km' },
        { value: 45, label: '20 km' },
        { value: 60, label: '30 km' },
        { value: 75, label: '50 km' },
        { value: 90, label: '100 km' },
        { value: 105, label: '200 km' },
    ]
    if (deliveryMethod === 'delivery' || dropdownOpen) return null;
    return (
        <div className="absolute bg-white p-4 rounded-md -ml-5 mt-2" style={!isLight ? { background: '#25262B' } : { background: '#fff' }}>
            <div className="flex flex-col gap-5 items-center  w-full justify-center">
                <AddressDropdown />
                <div>
                    <Text align="center">Proximité</Text>
                    <Slider label={(val) => MARKS.find((mark) => mark.value === val)?.label} step={15}
                        classNames={{ root: 'w-52', markLabel: 'hidden', }} labelAlwaysOn marks={MARKS} />
                </div>
                <Button color='secondary'>Confirmer</Button>
            </div>
        </div>

    )
}
export default LocationOptions;
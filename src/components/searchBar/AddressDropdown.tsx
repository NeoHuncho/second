import { Popover, Text, TextInput } from "@mantine/core"
import { useEffect, useState } from "react"
import type { placeAutocomplete } from "../../requests/backend";
import { getPlaceAutocomplete } from "../../requests/backend"
import { useDebouncedState } from "@mantine/hooks";
import useSearchParams from "../../stores/useSearchParams";

const AddressDropdown = () => {
    const [enteredAddress, setEnteredAddress] = useDebouncedState<string>('', 300)
    const { addressConfirmed, setAddressConfirmed } = useSearchParams()
    const [addressList, setAddressList] = useState<placeAutocomplete[]>([])
    useEffect(() => {
        if (!enteredAddress.length) return
        void getPlaceAutocomplete(enteredAddress).then((res) => {
            setAddressList(res.data)
        })
    }, [enteredAddress])
    const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement
        const address = addressList.find((address) => address.title === target.innerText)
        if (address)
            setAddressConfirmed(true)
    }

    return (
        <Popover opened={!!enteredAddress.length && !addressConfirmed} width={200}>
            <Popover.Target>
                <TextInput onChange={(event) => setEnteredAddress(event.currentTarget.value)}
                    placeholder="Votre ville" className="w-52" />
                
            </Popover.Target>
            {!!addressList.length && !!enteredAddress &&
                <Popover.Dropdown>
                    <div className="flex flex-col gap-1">
                        {addressList.map((address) => (
                            <div key={address.placeId} onClick={onClick} className="cursor-pointer">
                                <Text className=" font-medium">{address.title}</Text>
                            </div>
                        ))}
                    </div>
                </Popover.Dropdown>}
        </Popover>
    )
}
export default AddressDropdown
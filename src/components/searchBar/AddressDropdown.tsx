import { Popover, Text, TextInput } from "@mantine/core"
import { useEffect, useState } from "react"
import type { placeAutocomplete } from "../../requests/backend";
import { getPlaceAutocomplete } from "../../requests/backend"
import { useDebouncedState } from "@mantine/hooks";

const AddressDropdown = () => {
    const [enteredAddress, setEnteredAddress] = useDebouncedState<string>('', 300)
    const [addressList, setAddressList] = useState<placeAutocomplete[]>([])
    useEffect(() => {
        if (!enteredAddress.length) return
        void getPlaceAutocomplete(enteredAddress).then((res) => {
            setAddressList(res.data)
        })
    }, [enteredAddress])

    return (
        <Popover width={200}>
            <Popover.Target>
                <TextInput onChange={(event) => setEnteredAddress(event.currentTarget.value)}
                    placeholder="Votre ville" className="w-52" />
            </Popover.Target>
            <Popover.Dropdown>
                <div className="flex flex-col gap-1">
                    {addressList.map((address) => (
                        <div key={address.placeId} className="cursor-pointer">
                            <Text className="text-gray-900 font-medium">{address.title}</Text>
                        </div>
                    ))}
                </div>
            </Popover.Dropdown>
        </Popover>
    )
}
export default AddressDropdown
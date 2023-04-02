import { Slider } from "@mantine/core";
import useLocation from "../../hooks/completion/useLocation";

export default function SearchSlider() {
    const { deliveryMethod, setDeliveryMethod } = useLocation();
    console.log(deliveryMethod)
    const MARKS = [
        { value: 0, label: 'Livraison 📦', stringValue: 'delivery' },
        { value: 50, label: 'Proche de moi 📍', stringValue: 'location' },
        { value: 100, label: 'les deux 📦📍', stringValue: 'both' },
    ];
    return (
        <Slider marks={MARKS} value={MARKS.find((item) => item.stringValue === deliveryMethod)?.value}
            defaultValue={50} step={50} className="w-72" classNames={{ label: 'hidden' }}
            onChange={(value) => setDeliveryMethod(MARKS.find((item) => item.value === value)?.stringValue as string)} />
    )

}
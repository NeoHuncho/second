import { Slider, Text } from "@mantine/core";
import useDeliveryParams from "../../stores/storage/usePersistentSearchParams";
import { useEffect, useState } from "react";
export default function AddressRangeSlider() {
  const MARKS = [
    { value: 0, label: "0 km" },
    { value: 15, label: "5 km" },
    { value: 30, label: "10 km" },
    { value: 45, label: "20 km" },
    { value: 60, label: "30 km" },
    { value: 75, label: "50 km" },
    { value: 90, label: "100 km" },
    { value: 100, label: "200 km" },
  ];
  const { locationRange, setLocationRange } = useDeliveryParams();
  const [actualRangeValue, setActualRangeValue] = useState(
    MARKS.find((mark) => mark.label === `${locationRange} km`)?.value || 0
  );
  const onChange = (value: number) => {
    setActualRangeValue(value);
    const label = MARKS.find((mark) => mark.value === value)?.label;
    if (!label) return;
    const match = label.match(/^\d+/);
    if (!match) return;
    setLocationRange(parseInt(match[0]));
  };

  useEffect(() => {
    setActualRangeValue(
      MARKS.find((mark) => mark.label === `${locationRange} km`)?.value || 0
    );
  }, [locationRange]);

  return (
    <div className="flex flex-col gap-8">
      <Text align="center">Proximité</Text>
      <Slider
        value={actualRangeValue}
        onChange={onChange}
        label={(val) => MARKS.find((mark) => mark.value === val)?.label}
        step={15}
        classNames={{ root: "w-52", markLabel: "hidden" }}
        labelAlwaysOn
        marks={MARKS}
      />
    </div>
  );
}

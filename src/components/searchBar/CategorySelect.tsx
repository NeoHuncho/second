import type { MantineSize } from "@mantine/core";
import { Select } from "@mantine/core";
import useSearchParams from "../../stores/state/useSearchParams";
import { Categories } from "../../../common/keys/keys";
import type { Category } from "../../../common/types/types";

type Props = {
    size: MantineSize;
}

export default function CategorySelect({ size }: Props) {
    const { category, setCategory } = useSearchParams();
    const data = Object.entries(Categories).map(([key, value]) => ({
        label: value,
        value: key,
    }))
    return (
        <Select
            clearable
            size={size}
            radius={"xs"}
            data={data}
            value={category}
            onChange={(value) => setCategory(value as Category)}
            placeholder="Catégories"
        />
    )

}
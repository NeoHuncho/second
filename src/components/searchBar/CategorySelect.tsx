import type { MantineSize } from "@mantine/core";
import { Select } from "@mantine/core";
import { Categories } from "../../../common/keys/keys";
import type { Category } from "../../../common/types/types";
import useShops from "../../stores/state/useShops";
import { useRouter } from "next/router";

type Props = {
    size: MantineSize;
}

export default function CategorySelect({ size }: Props) {
    const { filters, setFilter } = useShops();
    const router = useRouter();
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
            value={filters.category || 'all'}
            onChange={(value) => setFilter({ key: 'category', value: value as string, router })}
            placeholder="Catégories"
        />
    )

}
import type { MantineSize } from "@mantine/core";
import { Select } from "@mantine/core";
import { Categories } from "../../../common/keys/keys";
import useShopsFilters from "../../stores/state/useShopFilters";

type Props = {
  size: MantineSize;
  onChange: (value: string | null) => void;
  radius?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

export default function CategorySelect({
  size,
  onChange,
  radius = "xs",
  className,
}: Props) {
  const { filters } = useShopsFilters();

  const data = Object.entries(Categories).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  return (
    <Select
      className={className ?? ""}
      clearable
      size={size}
      radius={radius}
      data={data}
      value={filters.category ? (filters.category as string) : null}
      onChange={onChange}
      placeholder="Catégorie"
    />
  );
}

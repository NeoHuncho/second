import type { MantineSize } from "@mantine/core";
import { Select } from "@mantine/core";
import { Categories } from "../../../common/keys/keys";
import useShopsFilters from "../../stores/state/useShopFilters";
import { motion } from "framer-motion";

type Props = {
  size: MantineSize;
  onChange: (value: string | null) => void;
  radius?: "xs" | "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
};

export default function CategorySelect({
  size,
  onChange,
  radius = "xs",
  className,
  animate,
}: Props) {
  const { filters } = useShopsFilters();

  const data = Object.entries(Categories).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  return (
    <motion.div
      animate={animate ? { scale: 1.05 } : { scale: 1 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );
}

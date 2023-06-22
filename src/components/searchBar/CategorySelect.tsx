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
  const ParentWrapper = ({ children }: { children: React.ReactNode }) => {
    if (animate) {
      return (
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
        >
          {children}
        </motion.div>
      );
    } else return <>{children}</>;
  };

  return (
    <ParentWrapper>
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
    </ParentWrapper>
  );
}

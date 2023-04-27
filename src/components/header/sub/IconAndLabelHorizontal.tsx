import { Text } from "@mantine/core";
import { useState } from "react";
import type { IconNames } from "../../../assets/icons";
import { Icon } from "../../../assets/icons";

type IconAndLabelHorizontalProps = {
  label: string;
  onClick?: () => void;
  iconName: IconNames;
};

const IconAndLabelHorizontal = ({
  label,
  onClick,
  iconName,
}: IconAndLabelHorizontalProps) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      className="flex cursor-pointer select-none flex-col items-center"
    >
      <Icon name={iconName} size={30} />
      <Text
        style={{ backgroundColor: hovering ? "blue" : "black" }}
        className={`-mt-1 select-none rounded-full border bg-black px-1 text-xs transition-colors duration-300`}
        color={"white"}
        weight={600}
      >
        {label}
      </Text>
    </div>
  );
};
export default IconAndLabelHorizontal;

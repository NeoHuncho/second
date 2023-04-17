import { Text } from "@mantine/core";
import { useState } from "react";
import type { IconNames } from "../../assets/icons";
import { Icon } from "../../assets/icons";

type IconAndLabelProps = {
  label: string;
  onClick?: () => void;
  iconName: IconNames;
};

const IconAndLabel = ({ label, onClick, iconName }: IconAndLabelProps) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center select-none"
    >
      <Icon name={iconName} size={30} />
      <Text
        style={{ backgroundColor: hovering ? "blue" : "black" }}
        className={`-mt-1 rounded-full border bg-black px-1 text-xs transition-colors duration-300 select-none`}
        color={"white"}
        weight={600}
      >
        {label}
      </Text>
    </div>
  );
};
export default IconAndLabel;

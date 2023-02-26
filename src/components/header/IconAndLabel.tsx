import { Text } from "@mantine/core";
import { ReactElement, useState } from "react";
import type { Icon } from "../../assets/icons";

type IconAndLabelProps = {
  Icon: Icon;
  label: string;
  onClick?: () => void;
};

const IconAndLabel = ({ Icon, label, onClick }: IconAndLabelProps) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center"
    >
      <Icon size={30} />
      <Text
        style={{ backgroundColor: hovering ? "blue" : "black" }}
        className={`-mt-1 rounded-full border bg-black px-1 text-xs transition-colors duration-300`}
        color={"white"}
        weight={600}
      >
        {label}
      </Text>
    </div>
  );
};
export default IconAndLabel;

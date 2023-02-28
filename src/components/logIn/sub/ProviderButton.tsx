import { Text } from "@mantine/core";
import { useState } from "react";
import type { Icon } from "../../../types/icons";

type Props = {
  color: string;
  Icon: Icon;
  name: string;
  onClick: () => void;
};
const ProviderButton = ({ color, Icon, name, onClick }: Props) => {
  const [onHover, setOnHover] = useState(false);
  const nameContainerStyle = {
    backgroundColor: onHover ? color : "white",
    borderColor: color,
    color: onHover ? "white" : color,
  };
  return (
    <div
      onClick={onClick}
      className="flex w-full cursor-pointer items-center justify-center"
    >
      <div
        style={{ backgroundColor: color }}
        className="flex h-10 w-11 items-center justify-center rounded-l-md py-1.5"
      >
        <Icon size={20} />
      </div>
      <Text
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
        style={nameContainerStyle}
        className={`flex h-10 w-full items-center justify-center rounded-r-md border-2  border-solid bg-white py-1.5 font-light transition-colors duration-200`}
      >
        {name}
      </Text>
    </div>
  );
};

export default ProviderButton;

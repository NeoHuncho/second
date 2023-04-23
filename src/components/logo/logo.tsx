import type { TitleOrder } from "@mantine/core";
import { Title } from "@mantine/core";

interface Props {
  textOrder?: TitleOrder;
  onClick?: () => void;
  className?: string;
}

function Logo({ textOrder = 1, onClick, className = "" }: Props) {
  return (
    <div
      onClick={onClick}
      className={`w-fit rounded-3xl px-4 py-1 ${className} `}
      style={{ backgroundColor: "#1a7474" }}
    >
      <Title
        order={textOrder}
        className="select-none tracking-widest text-white "
      >
        SECONDD
      </Title>
    </div>
  );
}
export default Logo;

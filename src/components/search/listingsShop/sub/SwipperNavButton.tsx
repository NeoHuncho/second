import { ActionIcon } from "@mantine/core";
import { BackIcon, ForwardIcon } from "../../../../types/icons";

type Props = {
  type: "prev" | "next";
};
const SwipperNavButton = (props: Props) => {
  const { type } = props;
  return (
    <ActionIcon
      variant="filled"
      color={"secondary"}
      id={type === "prev" ? "custom-prev-button" : "custom-next-button"}
      className={`absolute top-1/2 z-10 flex items-center justify-center ${
        type === "prev" ? "left-4" : "right-4"
      }`}
    >
      {type === "prev" ? <BackIcon size={50} /> : <ForwardIcon size={50} />}
    </ActionIcon>
  );
};

export default SwipperNavButton;

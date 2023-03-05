import { ActionIcon } from "@mantine/core";
import { Icon } from "../../../../assets/icons";

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
      {type === "prev" ? (
        <Icon name="OutlineArrowLeft" size={50} color="white" />
      ) : (
        <Icon name="OutlineArrowRight" size={50} color="white" />
      )}
    </ActionIcon>
  );
};

export default SwipperNavButton;

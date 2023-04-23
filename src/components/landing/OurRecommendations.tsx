// assume you have the arrow icon as a separate component

import { Text } from "@mantine/core";
import { Icon } from "../../assets/icons";

interface Props {
  onClick?: () => void;
}

function OurRecommendations({ onClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 pb-10">
      <div
        onClick={onClick}
        className="flex h-14 w-14 flex-col items-center justify-center  rounded-full bg-gray-300 transition-colors duration-200 ease-in-out hover:bg-teal-600"
      >
        <Icon name="outlineArrowDown" size={30} />
      </div>
      <Text className="text-center  text-xs font-bold text-gray-700">
        Nos recommendations
      </Text>
    </div>
  );
}

export default OurRecommendations;

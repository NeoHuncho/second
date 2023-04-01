

// assume you have the arrow icon as a separate component

import { Text } from "@mantine/core";
import { Icon } from "../../assets/icons";

interface Props {
    onClick?: () => void
}

function OurRecommendations({ onClick }: Props) {
    return (
        <div className="pb-10 flex flex-col items-center gap-2">
            <div onClick={onClick} className="w-14 h-14 flex flex-col items-center justify-center  rounded-full bg-gray-300 hover:bg-teal-600 transition-colors duration-200 ease-in-out">
                <Icon name="outlineArrowDown" size={30} />
            </div>
            <Text className="text-center  font-bold text-xs text-gray-700">
                Nos recommendations
            </Text>
        </div>
    );
}

export default OurRecommendations;

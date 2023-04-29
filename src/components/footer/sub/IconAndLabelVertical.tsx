import { Text } from "@mantine/core";
import type { IconNames } from "../../../assets/icons";
import { Icon } from "../../../assets/icons";
import Image from "next/image";

type Props = {
  icon?: IconNames;
  image?: string;
  label: string;
  path?: string;
  onClick: (val: string) => void;
  selected?: boolean;
};
export default function IconAndLabelVertical({
  icon,
  path,
  label,
  onClick,
  image,
  selected,
}: Props) {
  return (
    <div
      onClick={() => onClick(path || "")}
      className="flex cursor-pointer select-none flex-col items-center gap-1"
    >
      {icon && <Icon name={`${icon}`} size={23} />}
      {image && (
        <Image
          src={image}
          alt="user"
          width={23}
          height={23}
          className={`rounded-full ${
            selected ? "border-5 border-solid border-gray-300" : ""
          }`}
        />
      )}
      <Text className="text-xs font-semibold">{label}</Text>
    </div>
  );
}

import { Text } from "@mantine/core";
import type { IconNames } from "../../../assets/icons";
import { Icon } from "../../../assets/icons";

type Props = {
  icon: IconNames;
  label: string;
  path?: string;
  onClick?: (val: string) => void;
};
export default function IconAndLabelVertical({
  icon,
  path,
  label,
  onClick,
}: Props) {
  return (
    <div
      onClick={() => onClick && path && onClick(path)}
      className="flex cursor-pointer select-none flex-col gap-1 items-center"
    >
      <Icon name={icon} size={23} />
      <Text className="text-xs font-semibold">{label}</Text>
    </div>
  );
}

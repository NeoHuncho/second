import { Divider, Text } from "@mantine/core";
import type { IconNames } from "../../assets/icons";
import { Icon } from "../../assets/icons";

type Props = {
  label: string;
  icon: IconNames;
  customRightComponent?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
};

export default function AccountItem({
  label,
  icon,
  customRightComponent,
  onClick,
  divider,
}: Props) {
  return (
    <div>
      <div onClick={onClick && onClick} className="flex justify-between gap-3">
        <div className="flex gap-3">
          <Icon name={icon} size={20} />
          <Text>{label}</Text>
        </div>
        {customRightComponent && customRightComponent}
        {!customRightComponent && (
          <Icon name="FillCaretRight" size={20} className="text-gray-400" />
        )}
      </div>
      {divider && <Divider my="sm" />}
    </div>
  );
}

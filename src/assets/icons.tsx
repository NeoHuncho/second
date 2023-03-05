import * as AiIcons from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import useColorScheme from "../hooks/ui/useColorTheme";

export type IconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  color?: string;
};

export type IconType = React.FC<IconProps & { name: keyof typeof icons }>;
export type IconNames = keyof typeof icons;
const icons = {
  OutlineSearch: AiIcons.AiOutlineSearch,
  OutlineUser: AiIcons.AiOutlineUser,
  FillCheckCircle: AiIcons.AiFillCheckCircle,
  FillWarning: AiIcons.AiFillWarning,
  Error: VscError,
  FillFileImage: AiIcons.AiFillFileImage,
  OutlineLink: AiIcons.AiOutlineLink,
  OutlineArrowLeft: AiIcons.AiOutlineArrowLeft,
  OutlineArrowRight: AiIcons.AiOutlineArrowRight,
  OutlineEye: AiIcons.AiOutlineEye,
  Clothes: GiClothes,
  TruckDelivery: TbTruckDelivery,
  FillFacebook: AiIcons.AiFillFacebook,
  FillGoogleSquare: AiIcons.AiFillGoogleSquare,
  SignOutAlt: FaSignOutAlt,
  FillCaretDown: AiIcons.AiFillCaretDown,
  FillCaretUp: AiIcons.AiFillCaretUp,
  MoonFill: BsMoonFill,
};
export const Icon: React.FC<IconProps & { name: keyof typeof icons }> = ({
  name,
  color,
  ...props
}) => {
  const { isLight } = useColorScheme();
  const IconComponent = icons[name];
  return (
    <IconComponent
      color={color ? color : isLight ? "black" : "white"}
      {...props}
    />
  );
};

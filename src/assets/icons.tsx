import * as AiIcons from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { GiClothes, GiConverseShoe, GiLaptop } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import {
  BsMoonFill,
  BsPhoneFill,
  BsScrewdriver,
  BsPencilFill,
  BsGridFill,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import useColorTheme from "../hooks/ui/useColorTheme";
import { RiSearchFill } from "react-icons/ri";
import { ImEnlarge } from "react-icons/im";
// BiCarousel
import { BiCarousel } from "react-icons/bi";

import { HiAdjustments } from "react-icons/hi";
export type IconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  color?: string;
  style?: React.CSSProperties;
};

export type IconType = React.FC<IconProps & { name: keyof typeof icons }>;
export type IconNames = keyof typeof icons;
const icons = {
  OutlineSearch: AiIcons.AiOutlineSearch,
  FillSearch: RiSearchFill,
  OutlineUser: AiIcons.AiOutlineUser,
  FillUser: FaUser,
  OutlineHome: AiIcons.AiOutlineHome,
  FillHome: AiIcons.AiFillHome,
  OutlineHeart: AiIcons.AiOutlineHeart,
  FillHeart: AiIcons.AiFillHeart,
  FillCheckCircle: AiIcons.AiFillCheckCircle,
  FillWarning: AiIcons.AiFillWarning,
  Error: VscError,
  FillFileImage: AiIcons.AiFillFileImage,
  OutlineLink: AiIcons.AiOutlineLink,
  OutlineArrowLeft: AiIcons.AiOutlineArrowLeft,
  OutlineArrowRight: AiIcons.AiOutlineArrowRight,
  outlineArrowDown: AiIcons.AiOutlineArrowDown,
  OutlineEye: AiIcons.AiOutlineEye,
  Clothes: GiClothes,
  TruckDelivery: TbTruckDelivery,
  FillFacebook: AiIcons.AiFillFacebook,
  FillGoogleSquare: AiIcons.AiFillGoogleSquare,
  SignOutAlt: FaSignOutAlt,
  FillCaretDown: AiIcons.AiFillCaretDown,
  FillCaretUp: AiIcons.AiFillCaretUp,
  FillCaretRight: AiIcons.AiFillCaretRight,
  MoonFill: BsMoonFill,
  Shoes: GiConverseShoe,
  Enlarge: ImEnlarge,
  Phone: BsPhoneFill,
  Laptop: GiLaptop,
  Screwdriver: BsScrewdriver,
  Close: AiIcons.AiOutlineClose,
  FillPencil: BsPencilFill,
  Grid: BsGridFill,
  Carousel: BiCarousel,
  Adjustments: HiAdjustments,
};

export const Icon: React.FC<IconProps & { name: keyof typeof icons }> = ({
  name,
  color,
  className,
  ...props
}) => {
  const { isLight } = useColorTheme();
  const IconComponent = icons[name];
  return (
    <IconComponent
      color={color ? color : isLight ? "black" : "white"}
      className={className}
      {...props}
    />
  );
};

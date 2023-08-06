import * as AiIcons from "react-icons/ai";
import {
  BsGridFill,
  BsHandThumbsUp,
  BsMoonFill,
  BsPalette,
  BsPencilFill,
  BsPhoneFill,
  BsScrewdriver,
} from "react-icons/bs";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiClothes, GiConverseShoe, GiLaptop } from "react-icons/gi";
import { ImEnlarge } from "react-icons/im";
import { RiSearchFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { VscError } from "react-icons/vsc";
import useColorTheme from "../hooks/ui/useColorTheme";
// BiCarousel
import { BiCarousel } from "react-icons/bi";
// RiAuctionLine
import { RiAuctionLine } from "react-icons/ri";

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
  FillDollar: AiIcons.AiFillDollarCircle,
  OutlineDollar: AiIcons.AiOutlineDollarCircle,
  OutlineEuro: AiIcons.AiOutlineEuroCircle,
  OutlineList: AiIcons.AiOutlineUnorderedList,
  OutlineHandThumbsUp: BsHandThumbsUp,
  OutlinePalette: BsPalette,
  OutlineAuction: RiAuctionLine,
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

import {
  AiOutlineSearch,
  AiOutlineUser,
  AiFillCheckCircle,
  AiFillWarning,
  AiFillFileImage,
  AiOutlineLink,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineEye,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillGoogleSquare,
} from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";

export const SearchIcon = ({ size, className, onClick }: IconProps) => (
  <AiOutlineSearch className={className} size={size} onClick={onClick} />
);
export const UserIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiOutlineUser
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

export const CheckIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiFillCheckCircle
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

export const ErrorIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiFillWarning
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

export const CrossIcon = ({ size, className, onClick, color }: IconProps) => (
  <VscError
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

export const ImageIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiFillFileImage
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

export const LinkIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiOutlineLink
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

export const BackIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiOutlineArrowLeft
    className={className}
    size={size}
    onClick={onClick}
    color={color}
  />
);

export const ForwardIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiOutlineArrowRight
    className={className}
    size={size}
    onClick={onClick}
    color={color}
  />
);

export const EyeIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiOutlineEye
    className={className}
    size={size}
    onClick={onClick}
    color={color}
  />
);

export const ClothesIcon = ({ size, className, onClick, color }: IconProps) => (
  <GiClothes
    className={className}
    size={size}
    onClick={onClick}
    color={color}
  />
);

export const DeliveryIcon = ({
  size,
  className,
  onClick,
  color,
}: IconProps) => (
  <TbTruckDelivery
    className={className}
    size={size}
    onClick={onClick}
    color={color}
  />
);
export const FacebookIcon = ({
  size,
  className,
  onClick,
  color,
}: IconProps) => (
  <AiFillFacebook
    className={className}
    size={size}
    onClick={onClick}
    color={color || "white"}
  />
);
export const GoogleIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiFillGoogleSquare
    className={className}
    size={size}
    onClick={onClick}
    color={color || "white"}
  />
);

export const LogOut = ({ size, className, onClick, color }: IconProps) => (
  <FaSignOutAlt
    className={className}
    size={size}
    onClick={onClick}
    color={color || "white"}
  />
);

export type IconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  color?: string;
};

export type Icon = React.FC<IconProps>;

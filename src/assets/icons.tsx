import {
  AiOutlineSearch,
  AiOutlineUser,
  AiFillCheckCircle,
  AiFillWarning,
  AiFillFileImage,
} from "react-icons/ai";

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

export const ImageIcon = ({ size, className, onClick, color }: IconProps) => (
  <AiFillFileImage
    color={color || "black"}
    className={className}
    size={size}
    onClick={onClick}
  />
);

type IconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  color?: string;
};

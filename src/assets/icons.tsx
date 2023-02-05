import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
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

type IconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  color?: string;
};

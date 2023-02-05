import { AiOutlineSearch } from "react-icons/ai";
export const SearchIcon = ({ size, className, onClick }: IconProps) => (
  <AiOutlineSearch className={className} size={size} onClick={onClick} />
);
type IconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
};

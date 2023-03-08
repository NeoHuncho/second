import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "./common/SearchBar";
import logo from "../assets/logo/logo_text.png";
import UserMenu from "./userMenu/UserMenu";
import { useLocalStorage } from "@mantine/hooks";
import useBreakpoints from "../hooks/ui/useBreakpoints";
const AppHeader = () => {
  const router = useRouter();
  const [theme] = useLocalStorage({
    key: "color-scheme",
  });
  const { isMobile } = useBreakpoints();
  return (
    <div className="grid h-full w-full grid-cols-2 items-center px-3 sm:grid-cols-3 ">
      <Image
        onClick={() => void router.push("/")}
        src={logo}
        alt="logo"
        className=" h-auto w-1/2 cursor-pointer object-contain sm:w-1/4"
      />
      {!isMobile && <SearchBar size="sm" />}
      <div className="flex justify-end">
        <UserMenu />
      </div>
    </div>
  );
};
export default AppHeader;

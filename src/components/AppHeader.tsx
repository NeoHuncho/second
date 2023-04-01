import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "./common/SearchBar";
import logo from "../assets/logo/logo_text.png";
import UserMenu from "./userMenu/UserMenu";
import { useLocalStorage } from "@mantine/hooks";
import useBreakpoints from "../hooks/ui/useBreakpoints";
import Logo from "./logo/logo";
const AppHeader = () => {
  const router = useRouter();

  const { isMobile } = useBreakpoints();
  return (
    <div className="grid h-full w-full grid-cols-2 items-center px-3 sm:grid-cols-3 ">
      <Logo textOrder={4} className="cursor-pointer" onClick={() => void router.push("/")} />
      {!isMobile && <SearchBar size="sm" />}
      <div className="flex justify-end">
        <UserMenu />
      </div>
    </div>
  );
};
export default AppHeader;

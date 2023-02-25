import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "./common/SearchBar";
import logo from "../assets/logo/logo_text_black.png";
import UserMenu from "./userMenu/UserMenu";
import { useSession } from "next-auth/react";
const AppHeader = () => {
  const router = useRouter();
  return (
    <div className="grid h-full w-full grid-cols-mobileHeader items-center px-3 sm:grid-cols-3 ">
      <Image
        onClick={() => void router.push("/")}
        src={logo}
        alt="logo"
        className=" h-auto w-5/6 cursor-pointer object-contain sm:w-1/4"
      />
      <SearchBar size="sm" />
      <div className="flex justify-end">
        <UserMenu />
      </div>
    </div>
  );
};
export default AppHeader;

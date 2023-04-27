import { useRouter } from "next/router";
import SearchBar from "../common/SearchBar";
import UserMenu from "../userMenu/UserMenu";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import Logo from "../logo/logo";
const AppHeader = () => {
  const router = useRouter();
  const { isMobile } = useBreakpoints();

  return (
    <>
      <div className="grid h-full w-full items-center  gap-5 px-3 sm:grid-cols-appHeader sm:gap-0 ">
        <Logo
          textOrder={4}
          className="cursor-pointer"
          onClick={() => void router.push("/")}
        />
        {!isMobile && <SearchBar size="sm" />}
        <div className="flex justify-end">
          <UserMenu />
        </div>
      </div>
    </>
  );
};
export default AppHeader;

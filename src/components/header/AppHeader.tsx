import { useRouter } from "next/router";
import SearchBar from "../common/SearchBar";
import UserMenu from "../userMenu/UserMenu";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import Logo from "../logo/logo";
import useIsComponentVisible from "../../stores/state/useIsComponentVisible";
import ShopTabs from "../search/header/shopTabs/ShopTabs";
import useShops from "../../stores/state/useShops";
import useColorTheme from "../../hooks/ui/useColorTheme";
const AppHeader = () => {
  const router = useRouter();
  const { isMobile } = useBreakpoints();
  const { isShopTabsVisible } = useIsComponentVisible();
  const { shops } = useShops();
  const { isDark } = useColorTheme();

  return (
    <div className="sm:mt-2">
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
      {router.pathname === "/search" && !isMobile && (
        <div
          className={`transition-opacity ${
            !isShopTabsVisible ? "opacity-100" : "opacity-0"
          } ${isDark ? "bg-darkBackground" : "bg-white"} px-3`}
        >
          <ShopTabs shops={[...Object.values(shops)]} noSwitch noObserver />
        </div>
      )}
    </div>
  );
};
export default AppHeader;

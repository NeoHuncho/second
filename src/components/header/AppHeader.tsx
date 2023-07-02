import { useRouter } from "next/router";
import SearchBar from "../common/SearchBar";
import UserMenu from "../userMenu/UserMenu";
import Logo from "../logo/logo";
import useIsComponentVisible from "../../stores/state/useIsComponentVisible";
import ShopTabs from "../search/header/shopTabs/ShopTabs";
import useColorTheme from "../../hooks/ui/useColorTheme";
import { ActionIcon, Text } from "@mantine/core";
import { Icon } from "../../assets/icons";
const AppHeader = () => {
  const router = useRouter();
  const { isShopTabsVisible } = useIsComponentVisible();
  const { isDark } = useColorTheme();

  return (
    <div className="sm:mt-2">
      <div className="grid h-full w-full items-center  gap-5 px-3 sm:grid-cols-appHeader sm:gap-0 ">
        <Logo
          textOrder={4}
          className="cursor-pointer"
          onClick={() => void router.push("/")}
        />
        <SearchBar size="sm" />
        <div className="flex justify-end gap-5">
          <div
            onClick={() => void router.push("/favorites")}
            className="flex cursor-pointer flex-col items-center"
          >
            <ActionIcon size="lg" variant="outline" radius="xl" color="gray">
              <Icon name="OutlineHeart" size={20} />
            </ActionIcon>
            <Text size="xs" className="text-center">
              Favoris
            </Text>
          </div>

          <UserMenu />
        </div>
      </div>
      {router.pathname === "/search" && !isShopTabsVisible && (
        <div
          className={`transition-opacity ${
            isDark ? "bg-darkBackground" : "bg-white"
          } px-3`}
        >
          <ShopTabs noObserver />
        </div>
      )}
    </div>
  );
};
export default AppHeader;

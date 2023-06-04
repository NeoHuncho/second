import useColorTheme from "../../hooks/ui/useColorTheme";
import useIsComponentVisible from "../../stores/state/useIsComponentVisible";
import useShops from "../../stores/state/useShops";
import SearchBar from "../common/SearchBar";
import ShopTabs from "../search/header/shopTabs/ShopTabs";

export default function MobileSearchHeader() {
  const { isShopTabsVisible } = useIsComponentVisible();
  const { shops } = useShops();
  const { isDark } = useColorTheme();
  return (
    <div className="mt-2">
      <SearchBar size="sm" />

      {!isShopTabsVisible && (
        <div
          className={`transition-opacity ${
            isDark ? "bg-darkBackground" : "bg-white"
          } px-3`}
        >
          <ShopTabs
            className="pt-2"
            shops={[...Object.values(shops)]}
            noObserver
          />
        </div>
      )}
    </div>
  );
}

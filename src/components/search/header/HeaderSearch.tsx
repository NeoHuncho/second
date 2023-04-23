import { Divider } from "@mantine/core";
import useBreakpoints from "../../../hooks/ui/useBreakpoints";
import SearchBar from "../../common/SearchBar";
import FiltersListing from "./filters/FiltersListing";
import SearchTerm from "./sub/SearchedTerm";
import SortListings from "./sub/SortListings";

const HeaderSearch = () => {
  const { isMobile } = useBreakpoints();
  return (
    <div className="flex flex-col gap-3 sm:gap-2">
      {isMobile && (
        <div>
          <div className="mb-4">
            <SearchBar size="sm" />
          </div>
          <Divider />
        </div>
      )}
      <div className="flex w-full justify-between">
        <SearchTerm />
        <div className="flex">
          <SortListings />
        </div>
      </div>  
      <FiltersListing />
    </div>
  );
};

export default HeaderSearch;

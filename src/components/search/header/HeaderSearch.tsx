import FiltersListing from "./filters/FiltersListing";
import SearchTerm from "./sub/SearchedTerm";
import SortListings from "./sub/SortListings";

const HeaderSearch = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-2">
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

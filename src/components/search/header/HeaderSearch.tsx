import FiltersListing from "./sub/FiltersListing";
import SearchTerm from "./sub/SearchedTerm";
import SortListings from "./sub/SortListings";

const HeaderSearch = () => {
  return (
    <div>
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

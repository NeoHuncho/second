import SearchTerm from "./sub/SearchedTerm";
import SortListings from "./sub/SortListings";

const HeaderSearch = () => {
  return (
    <div className="flex w-full justify-between">
      <SearchTerm />
      <div className="flex">
        <SortListings />
      </div>
    </div>
  );
};

export default HeaderSearch;

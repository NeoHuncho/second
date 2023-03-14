import { Checkbox } from "@mantine/core";
import { useRouter } from "next/router";
import { Categories } from "../../../../../../common/types/keys";
import useShops from "../../../../../stores/useShops";
import categoryText from "../../../../../utils/filterText/categoryText";
import type { DropDownInterface } from "../FiltersListing";

const CategoryDropdown = ({ setFilterText }: DropDownInterface) => {
  const router = useRouter();
  const { filters, setFilters, removeFilter } = useShops();
  return (
    <div className="flex flex-col gap-3">
      {Object.keys(Categories).map((category) => (
        <div key={category} className="flex items-center gap-2">
          <Checkbox
            checked={filters.category === category}
            label={Categories[category as keyof typeof Categories]}
            onChange={(e) => {
              if (e.target.checked)
                setFilters({ key: "category", value: category, router });
              else removeFilter({ key: "category", router });
              setFilterText(categoryText({ value: category }));
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default CategoryDropdown;

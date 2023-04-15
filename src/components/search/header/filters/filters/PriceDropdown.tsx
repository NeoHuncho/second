import type { DropDownInterface } from "../FiltersListing";
import { TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useShops from "../../../../../stores/state/useShops";
import { useDebouncedState } from "@mantine/hooks";
import priceText from "../../../../../utils/filterText/priceText";
import { Filters } from "../../../../../../common/keys/keys";

const PriceDropdown = ({ setFilterText }: DropDownInterface) => {
  const { priceMin, priceMax, onChange } = usePrice({ setFilterText });
  return (
    <div className="flex flex-row gap-2">
      <TextInput
        value={priceMin}
        onChange={(e) =>
          (/^\d+$/.test(e.target.value) || e.target.value === "") &&
          onChange("priceMin", e.target.value)
        }
        className="w-32"
        label={Filters.priceMin}
      />
      <TextInput
        value={priceMax}
        onChange={(e) =>
          (/^\d+$/.test(e.target.value) || e.target.value === "") &&
          onChange("priceMax", e.target.value)
        }
        className="w-32"
        label={Filters.priceMax}
      />
    </div>
  );
};

const usePrice = ({
  setFilterText,
}: {
  setFilterText: (text: string) => void;
}) => {
  const router = useRouter();
  const { filters, setFilter, removeFilter } = useShops();
  const [firstLoadMin, setFirstLoadMin] = useState(true);
  const [firstLoadMax, setFirstLoadMax] = useState(true);
  const [priceMinDebounced, setPriceMinDebounced] = useDebouncedState(
    filters.priceMin,
    400
  );
  const [priceMaxDebounced, setPriceMaxDebounced] = useDebouncedState(
    filters.priceMax,
    400
  );
  const [priceMin, setPriceMin] = useState(filters.priceMin);
  const [priceMax, setPriceMax] = useState(filters.priceMax);

  const onChange = (type: "priceMin" | "priceMax", value: string) => {
    if (!value) removeFilter({ key: type, router: router });
    if (type === "priceMin") {
      setPriceMinDebounced(value);
      setPriceMin(value);
    }
    if (type === "priceMax") {
      setPriceMaxDebounced(value);
      setPriceMax(value);
    }

    setFilterText(priceText({ filters, type, value }));
  };

  useEffect(() => {
    if (firstLoadMin) return setFirstLoadMin(false);
    if (priceMinDebounced) {
      setFilter({ key: "priceMin", value: priceMinDebounced });
      void router.push({
        pathname: router.pathname,
        query: { ...router.query, priceMin: priceMinDebounced },
      });
    }

  }, [priceMinDebounced]);

  useEffect(() => {
    if (firstLoadMax) return setFirstLoadMax(false);
    if (priceMaxDebounced) {
      setFilter({ key: "priceMax", value: priceMaxDebounced });
      void router.push({
        pathname: router.pathname,
        query: { ...router.query, priceMax: priceMaxDebounced },
      });
    }
  }, [priceMaxDebounced]);
  return { priceMin, priceMax, onChange };
};
export default PriceDropdown;

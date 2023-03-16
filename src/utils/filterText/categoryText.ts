import { Categories, Filters } from "../../../common/keys/keys";
import useShops from "../../stores/useShops";
type Props = {
  filters?: Record<string, string>;
  value?: string;
};
const categoryText = ({ filters, value }: Props) => {
  if (value) return Categories[value as keyof typeof Categories];
  if (!filters) return Filters["category"];
  const { category } = filters;

  if (!category) return Filters["category"];
  else return Categories[category as keyof typeof Categories];
};
export default categoryText;

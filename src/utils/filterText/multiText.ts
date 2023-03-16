import { MultiKeyFilterTypes } from "../../../common/keys/keys";

type Props = {
  filters?: string[];
  key: string;
};
const multiText = ({ filters, key }: Props) => {
  const multiKeyValue =
    MultiKeyFilterTypes[key as keyof typeof MultiKeyFilterTypes];
  if (!filters || !filters.length) return multiKeyValue;
  const count = filters.length;
  return `${multiKeyValue} (${count})`;
};
export default multiText;

type Props = {
  filters?: string[];
  key: string;
};
const multiText = ({ filters, key }: Props) => {
  if (!filters || !filters.length) return key;
  const count = filters.length;
  if (count === 1) return `${filters[0] || ""}`;
  else return `${key} (${count})`;
};
export default multiText;

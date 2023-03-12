type Props = {
  filters?: string[];
  key: string;
};
const multiText = ({ filters, key }: Props) => {
  if (!filters || !filters.length) return key;
  const count = filters.length;
  return `${key} (${count})`;
};
export default multiText;

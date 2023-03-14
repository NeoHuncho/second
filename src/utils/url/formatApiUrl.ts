type Props = {
  routeName: string;
  params: string;
};
const formatApiUrl = ({ routeName, params }: Props) => {
  return `api/${routeName}?${params}`;
};

export default formatApiUrl;

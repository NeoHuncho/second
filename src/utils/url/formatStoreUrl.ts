type Props = {
  store: string;
  page: number;
};

const formatStoreUrl = ({ store, page }: Props) => {
  const apiUrl = (window && `${window.location.origin}/api`) || "";
  const searchTerms = window.location.search.split("?query")[1];
  if (!searchTerms) {
    console.error("could not find search term in url");
    return;
  }
  return `${apiUrl}/search/getShop?shop=${store}${
    page ? `&page=${page}&query${searchTerms}` : ""
  }`;
};

export default formatStoreUrl;

type Props = {
  store: string;
  page: number;
};

const formatStoreUrl = ({ store, page }: Props) => {
  const apiUrl = (window && `${window.location.origin}/api`) || "";
  const searchTerm = window.location.search.split("=")[1];
  if (!searchTerm) {
    console.error("could not find search term in url");
    return;
  }

  return `${apiUrl}/getShop?shop=${store}&text=${searchTerm}${
    page ? `&page=${page}` : ""
  }`;
};

export default formatStoreUrl;

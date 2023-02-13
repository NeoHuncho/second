import { load } from "cheerio";
import type { LeboncoinListing } from "../../../../src/types/shops/Leboncoin";

type LeboncoinData = {
  props: {
    pageProps: {
      searchData: {
        ads: LeboncoinListing[];
      };
    };
  };
};

const parseLeboncoin = (responseText: string) => {
  const $ = load(responseText);
  const data = $("script")
    .filter((i, el) => {
      return $(el).attr("id") === "__NEXT_DATA__";
    })
    .text();
  const leboncoinRes = JSON.parse(data) as LeboncoinData;
  return leboncoinRes.props.pageProps.searchData.ads;
};

export default parseLeboncoin;

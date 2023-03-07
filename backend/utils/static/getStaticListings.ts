import { readFile } from "fs/promises";
import type { ShopName } from "../../../common/types/types";

const getStaticListings = async (shopName: ShopName) => {
  return await readFile(`backend/static/shops/${shopName}.txt`, {
    encoding: "utf8",
  });
};
export default getStaticListings;

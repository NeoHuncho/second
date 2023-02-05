export type Shop = {
  shop_name: string;
  shop_image: string;
  listings: ShopListing[];
  status: "loading" | "success" | "error";
};

export type ShopListing = {
  image: string;
  title: string;
  price: number;
};

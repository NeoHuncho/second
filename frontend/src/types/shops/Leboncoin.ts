export interface LeboncoinListing {
  list_id: number;
  first_publication_date: string;
  index_date: string;
  status: string;
  category_id: string;
  category_name: string;
  subject: string;
  body: string;
  ad_type: string;
  url: string;
  price: number[];
  price_cents: number;
  images: Images;
  attributes: Attribute[];
}

interface Images {
  thumb_url: string;
  small_url: string;
  nb_images: number;
  urls: string[];
  urls_thumb: string[];
  urls_large: string[];
}

interface Attribute {
  key: string;
  value: string;
  values: string[];
}

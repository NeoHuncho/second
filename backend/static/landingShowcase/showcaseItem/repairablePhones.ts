import type {
  LandingListing,
  ListingChildren,
} from "../../../../src/types/types";
import iphone14img from "../../../assets/products/phones/apple_iphone14.png";
import coreZ5 from "../../../assets/products/phones/CORE-Z5.webp";
import coreX5 from "../../../assets/products/phones/CORE-X5.webp";
import coreM5 from "../../../assets/products/phones/CORE-M5.webp";
import coreX4 from "../../../assets/products/phones/CORE-X4.webp";
import A14 from "../../../assets/products/phones/a14.webp";
import A54 from "../../../assets/products/phones/a54.webp";
import A53 from "../../../assets/products/phones/a53.webp";
import A34 from "../../../assets/products/phones/a34.webp";
import A23 from "../../../assets/products/phones/a23.webp";

import fairphone3 from "../../../assets/products/phones/fairphone_3.jpeg";
import fairphone4 from "../../../assets/products/phones/fairphone_4.png";
import redmiNote11 from "../../../assets/products/phones/redmi_note11.png";
import vivoV52 from "../../../assets/products/phones/vivo_y52.png";
import motorolaE13 from "../../../assets/products/phones/motorola_e13.png";
import iphone13 from "../../../assets/products/phones/apple_iphone13.png";
import oppoA74 from "../../../assets/products/phones/oppo_a74.png";
import sonyXperia10 from "../../../assets/products/phones/sony_xperia10.png";
import redmiNote10 from "../../../assets/products/phones/redmi_note10.png";

const repairablePhones: LandingListing[] = [
  {
    title: "Fairphone",
    repairScore: 9.2,
    image: fairphone4,
    url: "/search?query=fairphone+4",
    type: "Showcase",
    children: [
      {
        title: "Fairphone 4",
        repairScore: 9.2,
        image: fairphone4,
        url: "/search?query=fairphone+4",
        type: "Showcase",
        priceRange: 2,
      },
      {
        title: "Fairphone 3+",
        repairScore: 8.7,
        image: fairphone3,
        url: "/search?query=fairphone+3",
        type: "Showcase",
        priceRange: 1,
      },
    ],
  },
  {
    title: "CROSSCALL Core 5",
    repairScore: 9.1,
    image: coreZ5,
    url: "/search?query=crosscall+core+m5",
    type: "Showcase",
    children: [
      {
        title: "CROSSCALL Core-Z5",
        repairScore: 9.1,
        image: coreZ5,
        url: "/search?query=crosscall+core+z5",
        type: "Showcase",
        priceRange: 3,
      },
      {
        title: "CROSSCALL Core-X5",
        repairScore: 9.1,
        image: coreX5,
        url: "/search?query=crosscall+core+x5",
        type: "Showcase",
        priceRange: 2,
      },
      {
        title: "CROSSCALL Core-M5",
        repairScore: 8.8,
        image: coreM5,
        url: "/search?query=crosscall+core+m5",
        type: "Showcase",
        priceRange: 1,
      },
      {
        title: "CROSSCALL Core-X4",
        repairScore: 8.8,
        image: coreX4,
        url: "/search?query=crosscall+core+x4",
        type: "Showcase",
        priceRange: 1,
      },
    ],
  },
  {
    title: "Samsung Galaxy A",
    repairScore: 8.8,
    image: A54,
    url: "/search?query=galaxy+a52",
    type: "Showcase",
    children: [
      {
        title: "Samsung Galaxy A14",
        repairScore: 8.8,
        image: A14,
        url: "/search?query=galaxy+a14",
        type: "Showcase",
        priceRange: 1,
      },
      {
        title: "Samsung Galaxy A54",
        repairScore: 8.4,
        image: A54,
        url: "/search?query=galaxy+a54",
        type: "Showcase",
        priceRange: 2,
      },
      {
        title: "Samsung Galaxy A53",
        repairScore: 8.2,
        image: A53,
        url: "/search?query=galaxy+a53",
        type: "Showcase",
        priceRange: 2,
      },
      {
        title: "Samsung Galaxy A34",
        repairScore: 8.3,
        image: A34,
        url: "/search?query=galaxy+a34",
        type: "Showcase",
        priceRange: 2,
      },
      {
        title: "Samsung Galaxy A23",
        repairScore: 8.1,
        image: A23,
        url: "/search?query=galaxy+a23",
        type: "Showcase",
        priceRange: 1,
      },
    ],
  },

  {
    title: "VIVO V21/Y52/X80",
    repairScore: 8,
    image: vivoV52,
    url: "/search?query=vivo+y52",
    type: "Showcase",
  },
  {
    title: "MOTOROLA E13",
    repairScore: 8,
    image: motorolaE13,
    url: "/search?query=motorola+e13",
    type: "Showcase",
  },
  {
    title: "REDMI NOTE 11",
    repairScore: 7.8,
    image: redmiNote11,
    url: "/search?query=redmi+note+11",
    type: "Showcase",
  },
  {
    title: "REDMI NOTE 10",
    repairScore: 7.3,
    image: redmiNote10,
    url: "/search?query=redmi+note+10",
    type: "Showcase",
  },
  {
    title: "OPPO A74",
    repairScore: 7,
    image: oppoA74,
    url: "/search?query=oppo+a74",
    type: "Showcase",
  },
  {
    title: "APPLE iPhone 14",
    repairScore: 6.9,
    image: iphone14img,
    url: "/search?query=iphone+14",
    type: "Showcase",
  },
  {
    title: "APPLE iPhone 13",
    repairScore: 6.4,
    image: iphone13,
    url: "/search?query=iphone+13",
    type: "Showcase",
  },
  {
    title: "SONY Xperia 10",
    repairScore: 6,
    image: sonyXperia10,
    url: "/search?query=sony+xperia+10",
    type: "Showcase",
  },
];

export default repairablePhones;

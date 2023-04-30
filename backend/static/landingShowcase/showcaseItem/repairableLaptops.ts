import type { LandingListing } from "../../../../src/types/types";
import acerAspire3 from "../../../assets/products/laptops/acer_aspire3.webp";
import appleMacBook from "../../../assets/products/laptops/apple_macbookAir13.png";

import asusZenbbook from "../../../assets/products/laptops/asus_zenbook.png";
import dellXps from "../../../assets/products/laptops/dell_xps.png";
import framework from "../../../assets/products/laptops/framework.jpg";
import LenovoIdeaPad3 from "../../../assets/products/laptops/lenovo_ideapad3.webp";
import LenovoIdeaPadFlex5 from "../../../assets/products/laptops/lenovo_ideadpadFlex5.webp";
import razerBlade from "../../../assets/products/laptops/razer_blade.png";
import samsungGalaxyBook2 from "../../../assets/products/laptops/samsung_galaxyBook2.png";

const repairableLaptops: LandingListing[] = [
  {
    title: "Framework Laptop",
    repairScore: 9.7,
    image: framework,
    url: "/search?query=framework+laptop",
    type: "Showcase",
  },
  {
    title: "Samsung Galaxy Book 2",
    repairScore: 8.7,
    image: samsungGalaxyBook2,
    url: "/search?query=samsung+galaxy+book+2",
    type: "Showcase",
  },
  {
    title: "Razer Blade ",
    repairScore: 7.8,
    image: razerBlade,
    url: "/search?query=razer+blade",
    type: "Showcase",
  },
  {
    title: "Lenovo IdeaPad 3",
    repairScore: 7.5,
    image: LenovoIdeaPad3,
    url: "/search?query=lenovo+ideapad+3",
    type: "Showcase",
  },
  {
    title: "Lenovo IdeaPad Flex 5 (PC Hybrid)",
    repairScore: 7.3,
    image: LenovoIdeaPadFlex5,
    url: "/search?query=lenovo+ideapad+flex+5",
    type: "Showcase",
  },
  {
    title: "Acer Aspire 3",
    repairScore: 7.1,
    image: acerAspire3,
    url: "/search?query=acer+aspire+3",
    type: "Showcase",
  },
  {
    title: "Asus Zenbook ",
    repairScore: 6.6,
    image: asusZenbbook,
    url: "/search?query=asus+zenbook",
    type: "Showcase",
  },

  {
    title: "Dell XPS 13",
    repairScore: 6.4,
    image: dellXps,
    url: "/search?query=dell+xps+13",
    type: "Showcase",
  },
  {
    title: "Apple MacBook (M1-M2)",
    repairScore: 6,
    image: appleMacBook,
    url: "/search?query=macbook+air+13",
    type: "Showcase",
  },
];
export default repairableLaptops;

import { Title } from "@mantine/core";
import ShowcaseCategories from "../../../backend/static/landingShowcase/Showcasecategories";
import { showcaseCategories } from "../../../common/keys/keys";
import useShowcaseBlock from "../../hooks/landing/useShowcaseBlock";
import SwiperCarousel from "../common/SwiperCarousel";
import Showcase from "./showcase/Showcase";

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}
export default function ShowcaseBlock({ targetRef }: Props) {
  return (
    <div
      ref={targetRef}
      className=" flex max-w-screen-2xl flex-col gap-24 px-3"
      style={{ width: "95vw" }}
    >
      <div className="flex flex-col gap-2">
        <Title order={3}>{`${showcaseCategories.repairable} 🪛`}</Title>
        <Showcase category={ShowcaseCategories.repairable} />
      </div>
      <div className="flex flex-col gap-2">
        <Title order={3}>{`${showcaseCategories.repairable} 🪛`}</Title>
        <Showcase category={ShowcaseCategories.repairable} />
      </div>
      <div className="flex flex-col gap-2">
        <Title order={3}>{`${showcaseCategories.repairable} 🪛`}</Title>
        <Showcase category={ShowcaseCategories.repairable} />
      </div>
    </div>
  );
}

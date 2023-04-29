import { Divider, Title } from "@mantine/core";
import ShowcaseCategories from "../../../backend/static/landingShowcase/Showcasecategories";
import { showcaseCategories } from "../../../common/keys/keys";
import Showcase from "./showcase/Showcase";

export default function ShowcaseBlock() {
  return (
    <div className=" mt-20 max-w-screen-2xl px-3" style={{ width: "95vw" }}>
      <div className="mb-5">
        <Title align="center" order={4}>
          Nos recommendations
        </Title>
        <Divider className="mt-1" />
      </div>
      <div className="mb-10 flex flex-col gap-24">
        <div className="flex flex-col gap-2">
          <Title order={5}>{`${showcaseCategories.repairable} 🪛`}</Title>
          <Showcase category={ShowcaseCategories.repairable} />
        </div>
      </div>
    </div>
  );
}

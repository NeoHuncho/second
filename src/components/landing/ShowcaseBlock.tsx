import { Title } from "@mantine/core";
import ShowcaseCategories from "../../../backend/static/landingShowcase/Showcasecategories";
import { showcaseCategories } from "../../../common/keys/keys";
import useShowcaseBlock from "../../hooks/landing/useShowcaseBlock";
import SwiperCarousel from "../common/SwiperCarousel";
import Showcase from "./showcase/Showcase";

export default function ShowcaseBlock() {

    return (
        <div className=" px-3 gap-4 max-w-screen-2xl " style={{ width: '95vw' }}>
            <div className="flex flex-col gap-2">
                <Title order={3} >{`${showcaseCategories.repairable} 🪛`}</Title>
                <Showcase category={ShowcaseCategories.repairable} />
            </div>
        </div>
    )
}
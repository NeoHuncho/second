import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import SearchBar from "../common/SearchBar";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import Logo from "../logo/logo";
import OurRecommendations from "./OurRecommendations";
import TypingText from "./TypingText";





interface Props {
    scrollIntoView: (alignment?: any) => void
}
const SearchBlock = ({ scrollIntoView }: Props) => {

    const { isMobile } = useBreakpoints()

    return (
        <div className="h-screen max-w-screen-md m-auto flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center " style={{ paddingTop: isMobile ? '12vh' : '30vh' }}>
                <Logo />
                <Title className="text-lg mx-6 sm:text-2xl font-bold text-center mt-4 mb-4">
                    Achetez
                    <TypingText />
                    avec des millions de produits d&apos;occasion!
                </Title>
                <SearchBar />
            </div >
            <OurRecommendations onClick={() => scrollIntoView({
                alignment: 'start',
            })} />
        </div >
    );


};

export default SearchBlock;
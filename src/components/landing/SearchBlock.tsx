import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import SearchBar from "../common/SearchBar";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import Logo from "../logo/logo";
import OurRecommendations from "./OurRecommendations";



const useChangingWord = () => {

    const words = ["économique", "écologique", "solidaire"];
    const [typingText, setTypingText] = useState("Économique");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delay, setDelay] = useState<number>(100);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined = undefined;
        const word = words[wordIndex];
        if (!word) return;
        if (!isDeleting) {
            timeoutId = setTimeout(() => {
                if (typingText === words[wordIndex]) {
                    setTimeout(() => {
                        setIsDeleting(true);
                        setDelay(50);
                    }, 3000);
                }
                setTypingText(word.substring(0, typingText.length + 1));
            }, delay);
        } else {
            timeoutId = setTimeout(() => {
                setTypingText(word.substring(0, typingText.length - 1));
                if (typingText === '') {
                    setIsDeleting(false);
                    setDelay(100);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }, delay);
        }

        return () => clearTimeout(timeoutId);
    }, [typingText, isDeleting, wordIndex, delay]);

    return typingText;
};

interface Props {
    scrollIntoView: (alignment?: any) => void
}
const SearchBlock = ({ scrollIntoView }: Props) => {
    const currentWord = useChangingWord();
    const { isMobile } = useBreakpoints()

    return (
        <div className="h-screen max-w-screen-lg m-auto flex flex-col items-center justify-between">
            <div className="flex flex-col items-center cursor-pointer" style={{ paddingTop: isMobile ? '12vh' : '30vh' }}>
                <Logo />
                <Title className="text-2xl font-bold text-center mt-4">
                    Achetez
                    <span
                        key={currentWord}
                        className="inline-block w-36 mx-1"
                        style={{ color: "#1a7474" }}
                    >
                        {currentWord}
                    </span>
                    avec des millions de produits d&apos;occasion!
                </Title>
                <SearchBar size="lg" inputClassName="w-5/6 mt-8 " />
            </div >
            <OurRecommendations onClick={() => scrollIntoView({
                alignment: 'start',
            })} />
        </div >
    );


};

export default SearchBlock;
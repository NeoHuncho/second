import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import SearchBar from "../common/SearchBar";

const useChangingWord = () => {

    const words = ["Économique", "Écologique", "Solidaire"];
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
const SearchBlock = () => {
    const currentWord = useChangingWord();

    return (
        <div className="mt-10 flex w-full max-w-screen-2xl flex-col items-center gap-6 pb-20">
            <Title className="text-xl font-bold text-center">
                Achetez
                <span
                    key={currentWord}
                    className="inline-block w-32"
                    style={{ color: "#1a7474" }}
                >
                    {currentWord}
                </span>
                avec des millions de produits d&apos;occasion!
            </Title>
            <SearchBar size="lg" inputClassName="mt-10 w-5/6 sm:w-2/4 sm:mt-0" />
        </div>
    );
};

export default SearchBlock;
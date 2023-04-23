import React, { useEffect, useState } from "react";

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


const TypingText = () => {
    const currentWord = useChangingWord();
    return (
        <span
            key={currentWord}
            className="inline-block w-28 sm:w-36 mx-1"
            style={{ color: "#1a7474" }}
        >
            {currentWord}
        </span>
    );
};

// Set the display name for the component
TypingText.displayName = 'TypingText';
export default TypingText;
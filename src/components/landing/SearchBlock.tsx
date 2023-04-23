import React from "react";
import { Title } from "@mantine/core";
import SearchBar from "../common/SearchBar";
import useBreakpoints from "../../hooks/ui/useBreakpoints";
import Logo from "../logo/logo";
import OurRecommendations from "./OurRecommendations";
import TypingText from "./TypingText";

interface Props {
  scrollIntoView: (alignment?: any) => void;
}
const SearchBlock = ({ scrollIntoView }: Props) => {
  const { isMobile } = useBreakpoints();

  return (
    <div className="m-auto flex h-screen max-w-screen-md flex-col items-center justify-between">
      <div
        className="flex w-full flex-col items-center "
        style={{ paddingTop: isMobile ? "12vh" : "30vh" }}
      >
        <Logo />
        <Title className="mx-6 mt-4 mb-4 select-none text-center text-lg font-bold sm:text-2xl">
          Achetez
          <TypingText />
          avec des millions de produits d&apos;occasion!
        </Title>
        <SearchBar />
      </div>
      <OurRecommendations
        onClick={() =>
          scrollIntoView({
            alignment: "start",
          })
        }
      />
    </div>
  );
};

export default SearchBlock;

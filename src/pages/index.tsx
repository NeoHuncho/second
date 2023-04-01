import { type NextPage } from "next";
import Head from "next/head";
import { useLocalStorage, useScrollIntoView } from "@mantine/hooks";
import SearchBlock from "../components/landing/SearchBlock";
import ShowcaseBlock from "../components/landing/ShowcaseBlock";
const Home: NextPage = () => {
  const [theme] = useLocalStorage({
    key: "color-scheme",
  });
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 150,
  });
  return (
    <>
      <Head>
        <title>Second</title>
        <meta name="description" content="Find second hand products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main
        className={`flex min-h-screen  flex-col items-center ${theme === "dark" ? "bg-landing-dark" : "bg-landing"
          } bg-cover bg-fixed bg-center bg-no-repeat pt-5 `}
      >

        <div className="max-w-screen-2xl pb-10">
          <SearchBlock scrollIntoView={scrollIntoView} />
          <ShowcaseBlock targetRef={targetRef} />
        </div>
      </main>
    </>
  );
};

export default Home;

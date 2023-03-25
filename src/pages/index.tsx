import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/common/SearchBar";
import logo from "../assets/logo/logo_text.png";
import { useLocalStorage } from "@mantine/hooks";
import SearchBlock from "../components/landing/SearchBlock";
const Home: NextPage = () => {
  const [theme] = useLocalStorage({
    key: "color-scheme",
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
        className={`flex min-h-screen flex-col items-center ${theme === "dark" ? "bg-landing-dark" : "bg-landing"
          } bg-cover bg-fixed bg-center bg-no-repeat pt-5 sm:justify-center`}
      >
        <Image
          src={logo}
          alt="logo"
          className="absolute top-4 left-4 h-auto w-28 cursor-pointer object-contain"
        />
        <SearchBlock />
      </main>
    </>
  );
};

export default Home;

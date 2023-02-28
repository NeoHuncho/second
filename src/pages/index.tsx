import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/common/SearchBar";
import logo from "../../public/assets/logo/logo_text_black.png";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Second</title>
        <meta name="description" content="Find second hand products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center bg-background-landing bg-cover bg-fixed bg-center bg-no-repeat pt-5 sm:justify-center">
        <Image
          src={logo}
          alt="logo"
          className="absolute top-4 left-4 h-auto w-28 cursor-pointer object-contain"
        />
        <div className="flex w-full max-w-screen-2xl flex-col items-center gap-6 pb-20">
          <SearchBar size="lg" inputClassName="mt-10 w-5/6 sm:w-2/4 sm:mt-0" />
        </div>
      </main>
    </>
  );
};

export default Home;

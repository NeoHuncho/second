import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/search/SearchBar";
import logo from "../assets/logo/logo_text_black.png";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Second</title>
        <meta name="description" content="Find second hand products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center bg-background-landing bg-cover bg-fixed bg-center bg-no-repeat pt-5 sm:justify-center">
        <Image
          src={logo}
          alt="logo"
          className=" absolute top-2 left-2 h-auto w-28 cursor-pointer object-contain"
        />
        <div className="flex w-full max-w-screen-2xl flex-col items-center gap-6 pb-20">
          <SearchBar size="lg" inputClassName="w-5/6 sm:w-2/4" />
        </div>
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

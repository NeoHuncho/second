import { ActionIcon, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserIcon } from "../assets/icons";
import SignUpModal from "./logIn/SignUpModal";
import SearchBar from "./search/SearchBar";
import logo from "../assets/logo/logo_text_black.png";
const AppHeader = () => {
  const router = useRouter();
  const [opened, modalControls] = useDisclosure(false);
  return (
    <div className="grid h-full w-full grid-cols-mobileHeader items-center px-3 sm:grid-cols-3 ">
      <Image
        onClick={() => void router.push("/")}
        src={logo}
        alt="logo"
        className=" h-auto w-1/4 cursor-pointer object-contain"
      />
      <SearchBar size="sm" />
      <ActionIcon onClick={modalControls.open} className="justify-self-end">
        <UserIcon size={40} />
      </ActionIcon>
      <SignUpModal opened={opened} onClose={modalControls.close} />
    </div>
  );
};
export default AppHeader;

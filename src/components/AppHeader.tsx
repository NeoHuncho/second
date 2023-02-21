import { ActionIcon, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { UserIcon } from "../assets/icons";
import SignUpModal from "./logIn/SignUpModal";
import SearchBar from "./search/SearchBar";

const AppHeader = () => {
  const router = useRouter();
  const [opened, modalControls] = useDisclosure(false);
  return (
    <div className="grid h-full w-full grid-cols-mobileHeader items-center px-3 sm:grid-cols-3 ">
      <Title
        color="primary"
        className="cursor-pointer text-md sm:text-4xl"
        onClick={() => void router.push("/")}
      >
        Second
      </Title>
      <SearchBar size="sm" />
      <ActionIcon onClick={modalControls.open} className="justify-self-end">
        <UserIcon size={40} />
      </ActionIcon>
      <SignUpModal opened={opened} onClose={modalControls.close} />
    </div>
  );
};
export default AppHeader;

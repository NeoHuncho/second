import { ActionIcon, Grid, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { UserIcon } from "../assets/icons";
import SearchBar from "./search/SearchBar";

const AppHeader = () => {
  const router = useRouter();
  return (
    <div className="grid h-full w-full grid-cols-mobileHeader items-center px-3 sm:grid-cols-3 ">
      <Title
        color="primary"
        order={1}
        className="cursor-pointer text-sm sm:text-4xl"
        onClick={() => void router.push("/")}
      >
        Second
      </Title>
      <SearchBar size="sm" />
      <ActionIcon className="justify-self-end">
        <UserIcon size={40} />
      </ActionIcon>
    </div>
  );
};
export default AppHeader;

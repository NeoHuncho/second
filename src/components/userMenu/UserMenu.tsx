import { ActionIcon, Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { signOut, useSession } from "next-auth/react";
import { LogOut, UserIcon } from "../../assets/icons";
import SignInModal from "../logIn/SignInModal";

const UserMenu = () => {
  const [opened, modalControls] = useDisclosure(false);
  const [menuOpened, menuControls] = useDisclosure(false);
  const { status } = useSession();
  const onSignOut = () => {
    void signOut({ redirect: false });
  };
  if (status !== "authenticated")
    return (
      <div className="flex justify-end">
        <ActionIcon onClick={modalControls.open} className="justify-self-end">
          <UserIcon size={40} />
        </ActionIcon>
        <SignInModal opened={opened} onClose={modalControls.close} />
      </div>
    );

    return (
      <div className="flex justify-end">
        <Menu trigger="hover" shadow={"lg"}>
          <Menu.Target>
            <ActionIcon className="justify-self-end">
              <UserIcon size={40} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <div
              onClick={onSignOut}
              className="flex cursor-pointer items-center gap-2"
            >
              <LogOut color="black" />
              <Text>Se déconnecter</Text>
            </div>
          </Menu.Dropdown>
        </Menu>
      </div>
    );
};

export default UserMenu;

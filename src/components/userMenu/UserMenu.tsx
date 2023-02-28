import { ActionIcon, Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LogOut, UserIcon } from "../../types/icons";
import IconAndLabel from "../header/IconAndLabel";
import SignInModal from "../logIn/SignInModal";

const UserMenu = () => {
  const [opened, modalControls] = useDisclosure(false);
  const { status, data } = useSession();
  const userImage = data?.user?.image;

  const onSignOut = () => {
    void signOut({ redirect: false });
  };
  if (status !== "authenticated")
    return (
      <>
        <IconAndLabel
          Icon={UserIcon}
          label="connexion"
          onClick={modalControls.open}
        />
        <SignInModal opened={opened} onClose={modalControls.close} />
      </>
    );

  return (
    <Menu trigger="hover" shadow={"lg"}>
      <Menu.Target>
        <div className="flex cursor-pointer flex-col items-center">
          {userImage ? (
            <>
              <Image
                src={userImage}
                alt="user"
                width={38}
                height={38}
                className="rounded-full"
              />
              <Text
                color={"black"}
                className="-mt-2 bg-white"
                weight={600}
                size="xs"
              >
                {data?.user?.name}
              </Text>
            </>
          ) : (
            <IconAndLabel Icon={UserIcon} label="profil" />
          )}
        </div>
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
  );
};

export default UserMenu;

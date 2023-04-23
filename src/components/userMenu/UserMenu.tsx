import { Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import IconAndLabel from "../header/IconAndLabel";
import SignInModal from "../logIn/SignInModal";
import UserDropdown from "./dropdown/UserDropdown";

const UserMenu = () => {
  const [opened, modalControls] = useDisclosure(false);
  const { status, data } = useSession();
  const userImage = data?.user?.image;

  if (status !== "authenticated")
    return (
      <>
        <IconAndLabel
          iconName="OutlineUser"
          label="connexion"
          onClick={modalControls.open}
        />
        <SignInModal opened={opened} onClose={modalControls.close} />
      </>
    );

  return (
    <Menu trigger="hover" shadow={"lg"}>
      <Menu.Target>
        <div className="flex cursor-pointer select-none flex-col items-center">
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
                className="-mt-2 rounded-md bg-white px-1"
                weight={600}
                size="xs"
              >
                {data?.user?.name}
              </Text>
            </>
          ) : (
            <IconAndLabel iconName="OutlineUser" label="profil" />
          )}
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <UserDropdown />
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;

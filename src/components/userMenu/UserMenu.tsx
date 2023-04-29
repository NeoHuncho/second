import { Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignInModal from "../logIn/SignInModal";
import UserDropdown from "./dropdown/UserDropdown";
import IconAndLabelHorizontal from "../header/sub/IconAndLabelHorizontal";

const UserMenu = () => {
  const [opened, modalControls] = useDisclosure(false);
  const { status, data } = useSession();
  const userImage = data?.user?.image;
  const userName = data?.user?.name;

  if (status !== "authenticated")
    return (
      <>
        <IconAndLabelHorizontal
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
                {userName}
              </Text>
            </>
          ) : (
            <IconAndLabelHorizontal iconName="OutlineUser" label="profil" />
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

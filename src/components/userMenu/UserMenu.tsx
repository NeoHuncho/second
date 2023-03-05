import { Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { UserIcon } from "../../types/icons";
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
        <UserDropdown />
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;

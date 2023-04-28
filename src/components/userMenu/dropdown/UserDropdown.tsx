import { Text } from "@mantine/core";
import { signOut } from "next-auth/react";
import { Icon } from "../../../assets/icons";
import DarkModeSwitch from "../../common/userOptions/DarkModeSwitch";

const UserDropdown = () => {
  const onSignOut = () => {
    void signOut({ redirect: false });
  };

  return (
    <div className="flex w-max flex-col  gap-3 px-3 py-1">
      <DarkModeSwitch />
      <div
        onClick={onSignOut}
        className="flex cursor-pointer items-center gap-2"
      >
        <Icon name="SignOutAlt" />
        <Text>Se déconnecter</Text>
      </div>
    </div>
  );
};

export default UserDropdown;

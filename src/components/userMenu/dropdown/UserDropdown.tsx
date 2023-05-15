import { Switch, Text } from "@mantine/core";
import { signOut } from "next-auth/react";
import { Icon } from "../../../assets/icons";
import useLocalStorage from "../../../stores/useLocalStorage";
const UserDropdown = () => {
  const onSignOut = () => {
    void signOut({ redirect: false });
  };
  const { theme, setTheme } = useLocalStorage();
  return (
    <div className="flex w-max flex-col  gap-3 px-3 py-1">
      <div className="flex cursor-pointer items-center justify-between gap-4 ">
        <div className="flex  items-center gap-2">
          <Icon name="MoonFill" />
          <Text>Dark Mode</Text>
        </div>
        <Switch
          onChange={(event) =>
            setTheme(event.currentTarget.checked ? "dark" : "light")
          }
          checked={theme === "dark"}
          size="xs"
          className="-mt-0.5"
        />
      </div>
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

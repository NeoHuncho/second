import { Switch, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { signOut } from "next-auth/react";
import { LogOut, MoonIcon } from "../../../types/icons";

const UserDropdown = () => {
  const onSignOut = () => {
    void signOut({ redirect: false });
  };
  const [theme, setTheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
  });
  return (
    <div className="flex w-max flex-col  gap-3 px-3 py-1">
      <div className="flex cursor-pointer items-center justify-between gap-4 ">
        <div className="flex  items-center gap-2">
          <MoonIcon />
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
        <LogOut color="black" />
        <Text>Se déconnecter</Text>
      </div>
    </div>
  );
};

export default UserDropdown;

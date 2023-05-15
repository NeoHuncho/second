import { Button, Switch, Text } from "@mantine/core";
import { signOut } from "next-auth/react";
import { Icon } from "../assets/icons";
import AccountItem from "../components/account/AccountItem";
import { useDisclosure } from "@mantine/hooks";
import ConfirmModal from "../components/common/ConfirmModal";
import useLocalStorage from "../stores/useLocalStorage";

export default function Account() {
  const [signOutOpen, signOutControls] = useDisclosure(false);
  const onSignOut = () => {
    void signOut({ redirect: false });
  };

  const { theme, setTheme } = useLocalStorage();

  return (
    <div className="w-full">
      <Text>Profil</Text>
      <div className="m-auto mt-5 flex max-w-xs flex-col ">
        <AccountItem
          label="Dark Mode"
          icon="MoonFill"
          customRightComponent={
            <Switch
              onChange={(event) =>
                setTheme(event.currentTarget.checked ? "dark" : "light")
              }
              checked={theme === "dark"}
              size="xs"
              className="-mt-0.5"
            />
          }
          divider
        />
        <AccountItem
          label="Se déconnecter"
          icon="SignOutAlt"
          onClick={signOutControls.open}
        />
      </div>
      <ConfirmModal
        onClose={signOutControls.close}
        opened={signOutOpen}
        onConfirm={onSignOut}
        text="Es-tu sûr de vouloir te déconnecter ?"
      />
    </div>
  );
}

import { Button } from "@mantine/core";
import DarkModeSwitch from "../components/common/userOptions/DarkModeSwitch";
import { signOut } from "next-auth/react";
import { Icon } from "../assets/icons";

export default function Account() {
  const onSignOut = () => {
    void signOut({ redirect: false });
  };
  return (
    <div className="w-full">
      <div className="m-auto flex  max-w-xs flex-col gap-3">
        <DarkModeSwitch />
        <Button
          leftIcon={<Icon name="SignOutAlt" />}
          onClick={onSignOut}
          variant="light"
          color="gray"
          className="mt-5"
        >
          Se déconnecter
        </Button>
      </div>
    </div>
  );
}

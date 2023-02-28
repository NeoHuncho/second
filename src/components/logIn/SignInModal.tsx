import {
  Modal,
  TextInput,
  Button,
  Group,
  Divider,
  Text,
  PasswordInput,
} from "@mantine/core";

import useSignIn from "../../hooks/account/useSignIn";

import { GoogleIcon } from "../../types/icons";
import { FacebookIcon } from "../../types/icons";
import ProviderButton from "./sub/ProviderButton";
import { useSession } from "next-auth/react";
interface SignInModalProps {
  onClose: () => void;
  opened: boolean;
}

export default function SignInModal({ onClose, opened }: SignInModalProps) {
  const {
    handleFacebookSignIn,
    handleGoogleSignIn,
    form,
    formOnSubmit,
    loading,
  } = useSignIn({ onClose });
  const { data, status } = useSession();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Connectez vous / Créer un compte"
    >
      <div className={`flex items-center gap-5`}>
        <ProviderButton
          Icon={FacebookIcon}
          name="Facebook"
          color="rgb(30 64 175)"
          onClick={handleFacebookSignIn}
        />
        <ProviderButton
          Icon={GoogleIcon}
          name="Google"
          color="rgb(220 38 38)"
          onClick={handleGoogleSignIn}
        />
      </div>
      <Divider my="lg" label="ou" labelPosition="center" />

      {/* <Group className="-mt-1" spacing="md">
        <TextInput
          label="Email"
          required
          type="email"
          placeholder="example@example.com"
          className="w-full"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Mot de passe"
          required
          className="w-full"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirmation du mot de passe"
          required
          className="w-full"
          {...form.getInputProps("confirmPassword")}
        />
      </Group>
      <Button
        loading={loading}
        onClick={formOnSubmit}
        color="secondary"
        type="submit"
        className=" m-auto mt-3 w-full"
      >
        Confirmer
      </Button> */}
    </Modal>
  );
}

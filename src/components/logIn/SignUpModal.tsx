import { useState } from "react";
import { Modal, TextInput, Button, Group, Divider } from "@mantine/core";
import { signIn } from "next-auth/react";
import facebookSignUpButton from "../../assets/signIn/facebookSignUp.png";
import googleSignUpButton from "../../assets/signIn/googleSignUp.png";
import Image from "next/image";
interface SignUpModalProps {
  onClose: () => void;
  opened: boolean;
}

export default function SignUpModal({ onClose, opened }: SignUpModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: window.location.href,
    })
      .then(() => {
        console.log("sign up");
      })
      .catch((err) => {
        console.warn("error creating account", err);
      });
  };

  const handleGoogleSignUp = () => {
    signIn("google", { callbackUrl: window.location.href })
      .then(() => {
        console.log("sign up");
      })
      .catch((err) => {
        console.warn("error creating account", err);
      });
  };

  const handleFacebookSignUp = () => {
    signIn("facebook", { callbackUrl: `${window.location.origin}/dashboard` })
      .then(() => {
        console.log("sign up");
      })
      .catch((err) => {
        console.warn("error creating account", err);
      });
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Créer un compte">
      <form onSubmit={handleSignUp}>
        <Group spacing="sm">
          <TextInput
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
            type="email"
            placeholder="example@example.com"
            className="w-full"
          />
          <TextInput
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
            type="password"
            className="w-full"
          />
        </Group>
        <Button type="submit" className=" m-auto mt-3 w-full">
          Créer votre compte
        </Button>
      </form>
      <Divider my="lg" label="ou" labelPosition="center" />
      <div className={`flex items-center gap-5`}>
        <div className="relative h-10 w-full">
          <Image
            src={googleSignUpButton}
            alt="google sign up"
            onClick={handleGoogleSignUp}
            className="object-contain"
            fill
          />
        </div>
        <div className="relative h-10 w-full">
          <Image
            src={facebookSignUpButton}
            alt="facebook sign up"
            onClick={handleFacebookSignUp}
            className="object-contain"
            fill
          />
        </div>
      </div>
    </Modal>
  );
}

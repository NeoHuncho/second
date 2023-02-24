import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z
    .string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
  confirmPassword: z
    .string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
});

const useSignIn = ({ onClose }: { onClose: () => void }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(schema),
  });
  const formOnSubmit = () => {
    const validation = form.validate();
    if (validation.hasErrors) return;
    if (form.values.password !== form.values.confirmPassword)
      return form.setFieldError(
        "confirmPassword",
        "Les mots de passe ne correspondent pas"
      );
    setLoading(true);
    handleSignIn()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const handleSignIn = () => {
    return signIn("email", {
      email: form.values.email,
      password: form.values.password,
      redirect: false,
    })
      .then((res) => {
        onClose();
      })
      .catch((err) => {
        console.warn("error creating account", err);
      });
  };

  const handleGoogleSignIn = () => {
    void signIn("google");
  };

  const handleFacebookSignIn = () => {
    void signIn("facebook");
  };
  return {
    handleGoogleSignIn,
    handleFacebookSignIn,
    form,
    formOnSubmit,
    loading,
  };
};
export default useSignIn;

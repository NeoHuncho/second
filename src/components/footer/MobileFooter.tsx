import { useEffect, useState } from "react";
import IconAndLabelVertical from "./sub/IconAndLabelVertical";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useDisclosure } from "@mantine/hooks";
import SignInModal from "../logIn/SignInModal";

export default function MobileFooter() {
  const [currentPage, setCurrentPage] = useState("/");
  const [openedSignIn, modalSignInControls] = useDisclosure(false);
  const router = useRouter();
  const { status, data } = useSession();

  const userImage = data?.user?.image;
  const userName = data?.user?.name;

  const onClick = (path: string) => {
    setCurrentPage(path);
    if (router.pathname !== path) void router.push(path);
  };

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  return (
    <div className="grid w-full grid-cols-4">
      <IconAndLabelVertical
        onClick={onClick}
        icon={`${currentPage === "/" ? "Fill" : "Outline"}Home`}
        path="/"
        label="Acceuil"
      />
      <IconAndLabelVertical
        onClick={onClick}
        icon={`${currentPage === "/search" ? "Fill" : "Outline"}Search`}
        path="/search"
        label="Recherche"
      />
      <IconAndLabelVertical
        onClick={onClick}
        icon={`${currentPage === "/favorites" ? "Fill" : "Outline"}Heart`}
        path="/favorites"
        label="Favoris"
      />
      {status !== "authenticated" && (
        <>
          <IconAndLabelVertical
            onClick={modalSignInControls.open}
            icon={`${openedSignIn ? "Fill" : "Outline"}User`}
            label="Compte"
          />
          <SignInModal
            opened={openedSignIn}
            onClose={modalSignInControls.close}
          />
        </>
      )}
      {status === "authenticated" &&
        (userImage ? (
          <IconAndLabelVertical
            onClick={onClick}
            image={userImage}
            label={userName || "Compte"}
            path="/account"
            selected={currentPage === "/account"}
          />
        ) : (
          <IconAndLabelVertical
            onClick={onClick}
            icon={`${currentPage === "/account" ? "Fill" : "Outline"}User`}
            path="/account"
            label="Compte"
          />
        ))}
    </div>
  );
}

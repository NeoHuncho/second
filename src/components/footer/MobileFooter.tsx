import { useEffect, useState } from "react";
import IconAndLabelVertical from "./sub/IconAndLabelVertical";
import { useRouter } from "next/router";

export default function MobileFooter() {
  const [currentPage, setCurrentPage] = useState("/");
  const router = useRouter();
  const onClick = (path: string) => {
    console.log(path);
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
      <IconAndLabelVertical
        onClick={onClick}
        icon={`${currentPage === "/account" ? "Fill" : "Outline"}User`}
        path="/account"
        label="Compte"
      />
    </div>
  );
}

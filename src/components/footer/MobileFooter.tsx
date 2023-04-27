import { useState } from "react";
import IconAndLabelVertical from "./sub/IconAndLabelVertical";

export default function MobileFooter() {
  const [currentPage, setCurrentPage] = useState("/");
  const onClick = (path: string) => {
    console.log(path);
    setCurrentPage(path);
  };

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
        icon={`${currentPage === "/user" ? "Fill" : "Outline"}User`}
        path="/user"
        label="Compte"
      />
    </div>
  );
}

"use client";

import { createContext, useContext } from "react";

interface NavbarProps {
  navbarShow: boolean;
  setNavbarShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarProviderDefaultValues: NavbarProps = {
  navbarShow: false,
  setNavbarShow: () => false,
}

const navbarContext = createContext<NavbarProps>(
  NavbarProviderDefaultValues
);
const useNavbar = () => {
  const navbarShow = useContext<NavbarProps>(navbarContext);

  if (navbarShow === undefined) {
    throw new Error("useNavbar must be used inside a navbarShowProvider");
  }

  return navbarShow;
};

export { navbarContext, useNavbar };

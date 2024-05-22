"use client";

import { useState } from "react"
import { navbarContext } from "@/contexts";

const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarShow, setNavbarShow] = useState<boolean>(false);

  return (
    <navbarContext.Provider value={{ navbarShow, setNavbarShow }}>
      {children}
    </navbarContext.Provider>
  );
};

export { NavbarProvider };

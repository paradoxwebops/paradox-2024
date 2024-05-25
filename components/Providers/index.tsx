"use client";
import { NextUIProvider } from "@nextui-org/react";
import { GoogleOAuthProvider } from "./GoogleAuthProvider";
import { ToastProvider } from "./ToastProvider";
import { ReduxProvider } from "./ReduxProvider";
import SmoothScrolling from "../SmoothScrolling";
import { NavbarProvider } from "./NavbarProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastProvider>
        <GoogleOAuthProvider>
          <ReduxProvider>
            <NextUIProvider>
              <SmoothScrolling>
                <NavbarProvider>
                  {children}
                </NavbarProvider>
              </SmoothScrolling>
            </NextUIProvider>
          </ReduxProvider>
        </GoogleOAuthProvider>
      </ToastProvider>
    </>
  );
}

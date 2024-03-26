"use client";
import { NextUIProvider } from "@nextui-org/react";
import { GoogleOAuthProvider } from "./GoogleAuthProvider";
import { ToastProvider } from "./ToastProvider";
import { ReduxProvider } from "./ReduxProvider";
import SmoothScrolling from "../SmoothScrolling";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
    <ToastProvider>
      <GoogleOAuthProvider>
        <ReduxProvider>
          <NextUIProvider>
            <SmoothScrolling>
              {children}
            </SmoothScrolling>
          </NextUIProvider>
        </ReduxProvider>
      </GoogleOAuthProvider>
    </ToastProvider>
    </>
  );
}

"use client";

import { createContext, useContext } from "react";

export type ToastObject = {
  title: string,
  description?: string,
  variant?: 'destructive' | 'default'
}
interface ToastProps {
  toastShow: ToastObject | null;
  toast: React.Dispatch<React.SetStateAction<ToastObject | null>>;
}

export const ToastProviderDefaultValues: ToastProps = {
  toastShow: null,
  toast: () => false,
}

const toastContext = createContext<ToastProps>(
  ToastProviderDefaultValues
);
const useToast = () => {
  const toastShow = useContext<ToastProps>(toastContext);

  if (toastShow === undefined) {
    throw new Error("useToast must be used inside a toastShowProvider");
  }

  return toastShow;
};

export { toastContext, useToast };

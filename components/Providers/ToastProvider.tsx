"use client";

import { useEffect, useState } from "react";
import { ToastObject, toastContext } from "@/contexts/toast";
import { Toast } from "@/components/Toast";
import { AnimatePresence, motion } from "framer-motion";
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastShow, toast] = useState<ToastObject | null>(null);
  useEffect(() => {
    setTimeout(() => {
      toast(null);
    }, 5000);
  }, [toastShow]);
  return (
    <toastContext.Provider value={{ toast, toastShow }}>
      {children}
      <AnimatePresence mode="wait">
        {toastShow && (
          <motion.div
            initial={{ marginRight: "-300px", opacity: 0 }}
            animate={{ marginRight: "0px", opacity: 1 }}
            exit={{ marginRight: "-300px", opacity: 0}}
          >
            <Toast
              title={toastShow?.title ?? ""}
              description={toastShow?.description ?? ""}
              variant={toastShow?.variant ?? "default"}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </toastContext.Provider>
  );
};

export { ToastProvider };

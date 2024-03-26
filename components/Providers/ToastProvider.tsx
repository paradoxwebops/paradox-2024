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
      <AnimatePresence>
        {toastShow && (
          <motion.div
            initial={{ right: "-200%" }}
            animate={{ right: "4px" }}
            exit={{ right: "200%" }}
            transition={{ duration: 0.75, ease: [80.87, 1, 0.14, 1] }}
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

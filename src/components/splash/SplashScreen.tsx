"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSplash } from "@/context/SplashContext";
import { BRAND_NAME } from "@/lib/config";

export default function SplashScreen() {
  const { setSplashDone } = useSplash();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("splash_shown");
    if (already) {
      setSplashDone(true);
    } else {
      setVisible(true);
    }
  }, [setSplashDone]);

  const handleExitComplete = () => {
    sessionStorage.setItem("splash_shown", "1");
    setSplashDone(true);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#383D3B]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.0 }}
          onAnimationComplete={(definition) => {
            // After logo animates in, trigger exit after a short hold
            if (definition === "animate") {
              setTimeout(() => setVisible(false), 400);
            }
          }}
        >
          <motion.img
            src="/logo.svg"
            alt={BRAND_NAME}
            className="h-20 w-auto brightness-0 invert"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

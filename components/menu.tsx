"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const layoutId = "MENU";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
      <LayoutGroup>
        {isOpen ? (
          <motion.div
            layoutId={layoutId}
            onClick={() => setIsOpen((x) => !x)}
            className="bg-slate-700 text-slate-300 flex flex-col items-center rounded-3xl relative"
          >
            <button className="absolute top-4 right-4 px-2 py-1 rounded-full border text-sm">
              Close
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-64 p-4 mt-4"
            >
              <ul className="space-y-2 py-2 px-4 text-center">
                <li>
                  <Link href="/" className="hover:text-slate-50">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-slate-50">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-slate-50">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-slate-50">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-slate-50 py-1 px-2 border rounded-full"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.button
              layout
              layoutId={layoutId}
              onClick={() => setIsOpen((x) => !x)}
              className="px-4 py-2 bg-slate-700 rounded-full"
            >
              <motion.span>Menu</motion.span>
            </motion.button>
          </AnimatePresence>
        )}
      </LayoutGroup>
    </div>
  );
}

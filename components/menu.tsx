"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-slate-700 text-slate-300 flex flex-col items-center rounded-3xl relative"
          >
            <button
              onClick={() => setIsOpen((x) => !x)}
              className="absolute top-4 right-4 px-2 py-1 rounded-full border text-sm"
            >
              Close
            </button>
            <motion.div className="w-64 p-4 mt-4">
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
          <motion.button
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setIsOpen((x) => !x)}
            className="px-4 py-2 bg-slate-700 text-slate-300 rounded-3xl inline-flex items-center justify-center"
          >
            Menu
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

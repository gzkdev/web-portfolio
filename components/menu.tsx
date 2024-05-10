"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { navLinks } from "@/constants";
import Link from "next/link";

const motionMenuVariant = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export function Menu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <motion.button
          whileTap={{ scale: 0.9 }}
          aria-label="toggle menu"
          className="px-4 py-2 text-sm rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/50 hover:text-zinc-100 sm:hidden outline-none"
        ></motion.button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={4}>
          <AnimatePresence>
            <motion.ul
              initial="initial"
              animate="animate"
              exit="initial"
              variants={motionMenuVariant}
              className="p-6 bg-zinc-800 border border-zinc-700 rounded-xl sm:hidden mr-6 text-sm text-center shadow-xl"
            >
              {navLinks.map(({ href, id, title }) => (
                <li key={id}>
                  <Link href={href} className="navlink inline-block my-2">
                    {title}
                  </Link>
                </li>
              ))}
              <li className="outline-none border border-zinc-700 rounded-full bg-zinc-700/50 text-zinc-100 mt-2 hover:bg-zinc-600/50 hover:border-zinc-600">
                <Link
                  href="mailto:ezihegodswill01@gmail.com"
                  className="block py-2 px-10"
                >
                  Get in touch
                </Link>
              </li>
            </motion.ul>
          </AnimatePresence>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

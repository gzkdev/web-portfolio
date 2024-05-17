"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { navLinks } from "@/constants";
import Link from "next/link";
import { PiDotsThree } from "react-icons/pi";

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
          className="size-8 text-sm inline-flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/50 hover:text-zinc-100 sm:hidden outline-none"
        >
          <PiDotsThree size={20} />
        </motion.button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={4}>
          <motion.ul
            initial="initial"
            animate="animate"
            variants={motionMenuVariant}
            className="p-2 bg-zinc-800 border border-zinc-700 rounded-3xl sm:hidden mr-6 text-sm shadow-xl"
          >
            {navLinks.map(({ href, id, title }) => (
              <li key={id}>
                <Link href={href} className="navlink inline-block m-2">
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
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

import Link from "next/link";
import { Menu } from "./menu";
import { navLinks } from "@/constants";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-6 sm:py-10">
        <Link href="/" className="hover:text-zinc-100 transition">
          Godswill Ezihe
        </Link>

        <ul className="hidden sm:flex sm:items-center sm:gap-6 sm:text-sm">
          {navLinks.map(({ href, id, title }) => (
            <li key={id}>
              <Link href={href} className="navlink">
                {title}
              </Link>
            </li>
          ))}
          <li className="outline-none border border-zinc-700 rounded-full bg-zinc-700/50 text-zinc-100">
            <Link
              href="mailto:ezihegodswill01@gmail.com"
              className="block py-2 px-6"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        <Menu />
      </div>
    </nav>
  );
}

import Link from "next/link";

const NavLinks = [
  {
    id: 0,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 1,
    title: "Demos",
    href: "/demos",
  },
  {
    id: 2,
    title: "Articles",
    href: "/articles",
  },
  {
    id: 3,
    title: "Resources",
    href: "/resources",
  },
];

export function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6 py-20">
        <Link href="/" className="font-semibold hover:text-zinc-100 transition">
          Ezihe Godswill
        </Link>

        <ul className="hidden sm:flex sm:items-center sm:gap-6 sm:text-sm">
          {NavLinks.map(({ href, id, title }) => (
            <li key={id}>
              <NavbarLink href={href} title={title} />
            </li>
          ))}
        </ul>

        <button className="size-8 border rounded-full sm:hidden"></button>
      </div>
    </nav>
  );
}

function NavbarLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative hover:text-zinc-100 after:content-[''] after:w-full after:h-[1px] after:bg-current after:absolute after:-bottom-0.5 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-left"
    >
      {title}
    </Link>
  );
}

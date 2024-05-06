import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6 py-20">
        <Link href="/">Ezihe Godswill</Link>

        <ul className="hidden sm:flex sm:items-center sm:gap-4 sm:text-sm">
          <li>
            <Link href="/articles">Projects</Link>
          </li>
          <li>
            <Link href="/articles">Demos</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/articles">Resources</Link>
          </li>
        </ul>

        <button className="size-8 border rounded-full sm:hidden"></button>
      </div>
    </nav>
  );
}

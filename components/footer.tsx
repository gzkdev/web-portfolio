import { socialMediaLinks } from "@/constants";

export function Footer() {
  return (
    <footer className="w-full max-w-screen-sm px-6 py-20 mx-auto">
      <div className="w-full flex flex-wrap gap-4 items-center justify-between">
        <div className="text-sm">
          <span className="align-middle">&copy;</span> Godswill Ezihe{" "}
          {new Date().getFullYear()}
        </div>
        <ul className="flex items-center justify-center gap-4 flex-wrap">
          {socialMediaLinks.map((medium) => (
            <li key={medium.name} className="hover:text-white transition">
              <a href={medium.url} aria-label="Twitter" title="Twitter">
                {<medium.icon />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

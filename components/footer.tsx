import { socialMediaLinks } from "@/constants";

export function Footer() {
  return (
    <footer className="px-6 py-24">
      <div className="text-center space-y-6">
        <ul className="flex items-center justify-center gap-4 flex-wrap text-xl">
          {socialMediaLinks.map((medium) => (
            <li key={medium.name}>
              <a href={medium.url} aria-label="Twitter" title="Twitter">
                {<medium.icon />}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-sm">
          <span className="align-middle">&copy;</span> Godswill Ezihe{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

import { FaXTwitter, FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="px-6">
      <div className="text-center space-y-6">
        <ul className="flex items-center justify-center gap-4 flex-wrap text-2xl">
          <li>
            <a href="#" aria-label="Twitter" title="Twitter">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Github" title="Github">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Codepen" title="Codepen">
              <FaCodepen />
            </a>
          </li>
        </ul>
        <div className="text-sm">
          <span className="align-middle">&copy;</span> Godswill Ezihe{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

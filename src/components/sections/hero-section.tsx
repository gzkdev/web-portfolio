import { GithubIcon, LinkedInIcon, MailIcon, XIcon } from "../icons";

const PROFILE_LINKS = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/godswill-ezihe",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <LinkedInIcon className="h-6" />,
  },
  {
    label: "X",
    url: "https://x.com/ezihegodswill",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <XIcon className="h-7" />,
  },
  {
    label: "GitHub",
    url: "https://github.com/gzkdev",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <GithubIcon className="h-6" />,
  },
  {
    label: "E-mail",
    url: "mailto:ezihegodswill01@gmail.com",
    icon: <MailIcon className="h-7" />,
  },
];

export default function HeroSection() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Hey, I&apos;m Godswill</h1>
      <p className="text-foreground/60">
        I&apos;m a design engineer & designer at OpenSea. I design and build
        products that feel magical, yet simple and intuitive. I obsess over the
        smallest details and I like to make people feel something through my
        work.
      </p>

      <ul className="flex items-center gap-4 justify-start text-sm">
        {PROFILE_LINKS.map(({ icon, label, url, rel, target }) => {
          return (
            <li key={label}>
              <a
                href={url}
                target={target}
                rel={rel}
                className="size-8 rounded-full flex items-center justify-center hover:opacity-60 transition-opacity"
              >
                <span className="sr-only">{label}</span>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

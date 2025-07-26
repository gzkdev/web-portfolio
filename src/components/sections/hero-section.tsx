import { PROFILES } from "@/constants/profiles";

export default function HeroSection() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium">Hey, I&apos;m Godswill</h1>
      <p className="text-foreground/60 text-sm">
        I&apos;m a design engineer & designer at OpenSea. I design and build
        products that feel magical, yet simple and intuitive. I obsess over the
        smallest details and I like to make people feel something through my
        work.
      </p>

      <ul className="flex items-center justify-start text-xs text-foreground/60 gap-2">
        {PROFILES.map(({ label, url, rel, target }, index) => {
          return (
            <li key={label}>
              <a
                href={url}
                target={target}
                rel={rel}
                className="px-2.5 py-1 rounded-full bg-foreground/10 hover:opacity-60 outline"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

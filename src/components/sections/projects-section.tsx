import { ICONS, PROJECTS } from "@/constants/projects";

export default function ProjectsSection() {
  return (
    <div className="space-y-12">
      <h2 className="font-medium">Projects</h2>

      <div className="grid gap-10">
        {PROJECTS.map(({ description, github_url, live_url, name, stack }) => {
          return (
            <div key={name} className="space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{name}</h4>
                <a
                  className="ml-auto text-xs text-foreground/60 hover:text-foreground focus-visible:text-foreground"
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-xs text-foreground/60 hover:text-foreground focus-visible:text-foreground"
                  href={live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>

              <p className="text-sm text-foreground/60">{description}</p>

              <div className="flex items-center flex-wrap gap-3 text-xs text-foreground/60 mt-4">
                {stack.map((stackItem) => {
                  return (
                    <span
                      key={stackItem}
                      className="inline-flex items-center gap-1"
                    >
                      {ICONS[stackItem]}
                      {stackItem}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

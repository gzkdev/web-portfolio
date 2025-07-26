import { PROJECTS } from "@/constants/projects";

export default function ProjectsSection() {
  return (
    <div className="space-y-12">
      <h2 className="font-medium leading-none tracking-tight">Projects</h2>

      <div className="grid gap-10">
        {PROJECTS.map(({ description, github_url, live_url, name, stack }) => {
          return (
            <div key={name} className="space-y-2 group">
              <div className="flex items-center gap-2">
                <h4 className="font-medium leading-none tracking-tight">
                  {name}
                </h4>
                <a
                  className="ml-auto text-sm leading-none text-foreground/60 focus-visible:text-foreground hover:underline focus-visible:underline group-hover:text-foreground"
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-sm leading-none text-foreground/60 focus-visible:text-foreground hover:underline focus-visible:underline group-hover:text-foreground"
                  href={live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>

              <p className=" text-foreground/60">{description}</p>

              <div className="flex items-center flex-wrap gap-1 text-xs text-foreground/60 mt-4">
                {stack.map((stackItem) => {
                  return (
                    <span
                      key={stackItem}
                      className="inline-flex items-center gap-1 border rounded-full px-3 py-1"
                    >
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

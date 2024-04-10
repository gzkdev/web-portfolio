import { Projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-10 py-24 max-w-screen-sm mx-auto">
      <section className="px-6 space-y-10">
        <header>
          <h1>Godswill Ezihe</h1>
          <span>Frontend Engineer</span>
        </header>
        <p>
          I build scalable, accessible and performant web applications that
          people love to interact with. Although I`m not a professional
          designer, sometimes you will find me tinkering on Figma. My love for
          Front-end engineering lies in learning and building applications
          people will actually love to use.
        </p>
      </section>

      <section className="py-10 px-6 space-y-10">
        <h2>Projects</h2>
        <ul className="flex flex-col gap-10">
          {Projects.map((project) => (
            <li key={project.id}>
              <a
                href="#"
                className="inline-flex flex-col gap-1 p-2 -m-2 hover:bg-zinc-800 rounded-md transition"
              >
                <h3>{project.name}</h3>
                <span className="text-sm">{project.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-max p-4">
          <a
            href="#"
            className="py-4 px-8 rounded-md bg-zinc-700 text-zinc-100 text-sm"
          >
            See More
          </a>
        </div>
      </section>

      <section className="py-10 px-6 space-y-4">
        <header className="font-semibold">Blog</header>
        <ul className="space-y-4">
          {[1, 2, 3, 4].map((n) => (
            <li key={n}>
              <a href="#" className="border inline-block p-2">
                What is a Sybil attack in distributed systems
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-max p-4">
          <a href="#" className="border py-2 px-4 rounded">
            See More
          </a>
        </div>
      </section>

      <footer className="py-10 px-6">
        <div className="text-center space-y-6">
          <ul className="flex items-center justify-center gap-4 flex-wrap">
            <li>
              <a href="#" className="border p-1">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="border p-1">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="border p-1">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="border p-1">
                Codepen
              </a>
            </li>
          </ul>
          <div>
            <span className="text-xl align-middle">&copy;</span> Godswill Ezihe{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}

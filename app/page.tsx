import { blogPosts } from "@/data/blog";
import { Projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-24 py-24 pb-10 max-w-screen-sm mx-auto">
      <section className="px-6 space-y-10">
        <header>
          <h1 className="text-lg sm:text-2xl">Godswill Ezihe</h1>
          <span className="sm:text-md">Frontend Engineer</span>
        </header>
        <p>
          I build scalable, accessible and performant web applications that
          people love to interact with. Although I`m not a professional
          designer, sometimes you will find me tinkering on Figma. My love for
          Front-end engineering lies in learning and building applications
          people will actually love to use.
        </p>
      </section>

      <section className="px-6 space-y-10">
        <h2>Projects</h2>
        <ul className="flex flex-col gap-10">
          {Projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.url}
                className="inline-flex flex-col gap-1 p-2 -m-2 hover:bg-zinc-800/80 rounded-lg transition"
              >
                <h3>{project.name}</h3>
                <span className="text-sm">{project.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-max pt-4 text-sm">
          <a
            href="#"
            className="py-3 px-6 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/50 hover:text-zinc-100  transition"
          >
            See More
          </a>
        </div>
      </section>

      <section className="px-6 space-y-10">
        <h2>Blog</h2>
        <ul className="flex flex-col gap-10">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <a
                href={post.url}
                className="inline-flex w-full flex-col gap-1 p-2 -m-2 hover:bg-zinc-800/80 hover:text-zinc-100 rounded-lg transition"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-max pt-4 text-sm">
          <a
            href="/"
            className="py-3 px-6 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/50 hover:text-zinc-100  transition"
          >
            See More
          </a>
        </div>
      </section>

      <footer className="px-6 text-sm">
        <div className="text-center space-y-6">
          <ul className="flex items-center justify-center gap-4 flex-wrap">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Codepen</a>
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

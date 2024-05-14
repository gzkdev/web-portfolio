import { Footer } from "@/components/footer";
import { blogPosts, projects } from "@/constants";

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
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.url}
                className="block flex-col gap-1 p-3 -m-3 border border-transparent hover:bg-zinc-800/50 hover:border-zinc-800 rounded-xl transition"
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
                className="block flex-col gap-1 p-3 -m-3 border border-transparent hover:bg-zinc-800/50 hover:text-zinc-100 hover:border-zinc-800 rounded-xl transition"
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
    </div>
  );
}

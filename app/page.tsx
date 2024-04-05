export default function Home() {
  return (
    <div className="space-y-6 py-10 max-w-screen-sm mx-auto">
      <section className="py-10 px-6 space-y-4">
        <header>
          <h1 className="font-semibold">Godswill Ezihe</h1>
          <span>Frontend Engineer</span>
        </header>
        <p className="text-xl text-balance">
          I&apos;m a front-end engineer ✨ from Nigeria. I build 🏗️ (and
          sometimes, design 🎨) rich web experiences with modern web
          technologies like HTML, CSS, JavaScript, and React. I&apos;m
          passionate about building scalable and accessible front-end web and
          mobile applications 🌐.
        </p>
      </section>

      <section className="py-10 px-6 space-y-4">
        <header className="font-semibold">Projects</header>
        <ul className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((num) => (
            <li key={num}>
              <a href="#" className="inline-flex flex-col gap-1 border p-2">
                <span>Octomigo</span>
                <span>
                  Code and documentation copyright 2011-2018 the authors. Code
                  released under the MIT License.
                </span>
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

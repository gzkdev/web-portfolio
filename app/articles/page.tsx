import { Footer } from "@/components/footer";
import { blogPosts } from "@/constants";
import React from "react";

export default function Articles() {
  return (
    <div className="space-y-24 py-24 pb-10 max-w-screen-sm mx-auto">
      <section className="px-6 space-y-10">
        <header>
          <h1 className="text-lg sm:text-2xl">Articles</h1>
        </header>
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

      <Footer />
    </div>
  );
}

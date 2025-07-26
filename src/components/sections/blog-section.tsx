import { POSTS_METADATA } from "@/constants/posts";
import Link from "next/link";

export default function BlogSection() {
  return (
    <div className="space-y-12">
      <h2 className="font-medium">Writing</h2>
      <BlogList />
    </div>
  );
}

export function BlogList() {
  return (
    <div className="space-y-4">
      {POSTS_METADATA.map(({ subtitle, title, url }) => {
        return (
          <Link
            key={title}
            href={url}
            className="flex flex-col gap-1 hover:opacity-60 p-2 -mx-2 rounded"
          >
            <span className="font-medium">{title}</span>
            <span className=" text-foreground/60">{subtitle}</span>
          </Link>
        );
      })}
    </div>
  );
}

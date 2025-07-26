import Link from "next/link";
import { CornerUpLeft, Link as LinkIcon } from "lucide-react";

export default function BlogNavbar() {
  return (
    <div className="flex items-center justify-between -mt-20">
      <Link
        href="/"
        className="size-9 flex items-center justify-center bg-foreground/5 rounded-full"
      >
        <span className="sr-only">Back</span>
        <CornerUpLeft size={16} />
      </Link>

      <button className="size-9 flex items-center justify-center bg-foreground/5 rounded-full">
        <span className="sr-only">Copy link</span>
        <LinkIcon size={16} />
      </button>
    </div>
  );
}

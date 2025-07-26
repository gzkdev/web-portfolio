import Link from "next/link";
import { CornerUpLeft, Link as LinkIcon } from "lucide-react";

export default function BlogNavbar() {
  return (
    <div className="flex items-center justify-between -mt-20">
      <Link
        href="/"
        className="size-9 flex items-center justify-center bg-foreground/10 rounded-full"
      >
        <CornerUpLeft size={16} />
      </Link>

      <button className="size-9 flex items-center justify-center bg-foreground/5 rounded-full">
        <LinkIcon size={16} />
      </button>
    </div>
  );
}

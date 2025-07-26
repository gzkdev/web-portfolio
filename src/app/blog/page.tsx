import BlogNavbar from "@/components/blog-navbar";
import { BlogList } from "@/components/sections/blog-section";

export default function Blog() {
  return (
    <div className="space-y-12">
      <BlogNavbar />
      <BlogList />
    </div>
  );
}

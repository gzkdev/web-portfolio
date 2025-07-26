import { HeroSection, ProjectsSection } from "@/components/sections";
import BlogSection from "@/components/sections/blog-section";

export default function Home() {
  return (
    <div className="space-y-28">
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
    </div>
  );
}

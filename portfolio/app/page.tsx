import HeroSection from "@/app/components/hero/hero";
import AboutSection from "@/app/components/about/about";
import ProjectSection from "./components/projects/project";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}

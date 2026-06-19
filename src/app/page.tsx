import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";

function App() {
  return (
    <div className="bg-background" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;

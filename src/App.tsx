import Hero from "@/components/hero/Hero"
import AboutMe from "@/components/about/AboutMe"
import { Marquee } from "./components/ui/marquee"
import { cn } from "./lib/utils"
import Work from "./components/about/Work"

function App() {

  let images = [
    "src/assets/logos/java.png",
    "src/assets/logos/typescript.png",
    "src/assets/logos/react.png",
    "src/assets/logos/node.svg",
    "src/assets/logos/express.png",
    "src/assets/logos/vite.svg",
    "src/assets/logos/expo.png",
  ]

  return (  
    <div className="bg-background dark flex flex-col items-center">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Tech Stack */}

      <h1 className="text-white mb-10 text-large opacity-50">Tech Stack</h1>
      <Marquee className={
        cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "[-webkit-mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "mb-40",
        )
      }>
        {images.map((src, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <img src={src} alt={`Logo ${index}`} className="h-16 w-16 object-contain" />
          </div>
        ))}
      </Marquee>

      {/* Previous work experiences */}
      <Work title="Full-Stack Developer" company="Dream Direct LLC" duration="Dec 2025 - Present" 
      description="Responsible for organizing and leading project development as well as carrying out coding and testing tasks." logoUrl="src/assets/logos/dreamdirect.png" 
      />

    </div>
  )
}

export default App
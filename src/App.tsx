import Hero from "@/components/hero/Hero"
import AboutMe from "@/components/about/AboutMe"
import { Marquee } from "./components/ui/marquee"
import { cn } from "./lib/utils"
import Work from "./components/about/Work"
import Contact from "./components/contact/Contact"

function App() {

  let images = [
    "/logos/java.png",
    "/logos/typescript.png",
    "/logos/react.png",
    "/logos/node.svg",
    "/logos/express.png",
    "/logos/vite.svg",
    "/logos/expo.png",
  ]

  return (  
    <div className="bg-background dark flex flex-col items-center overflow-x-hidden overscroll-behavior-y-contain">
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
      <h1 className="text-white mb-10 text-large opacity-50">Previous Work Experiences</h1>

      <Work title="Lead Developer" company="Dream Direct LLC" duration="Dec 2025 - Present" 
      description="Responsible for organizing and leading project development as well as carrying out coding and testing tasks." logoUrl="/logos/dreamdirect.png" 
      />
      <Work title="Full-Stack Developer" company="Freelance" duration="Aug 2025 - Dec 2025"
      description="Worked with a client to create a custom CRM for their business operations. Utilizing React + Vite and Express.js frameworks." logoUrl="/logos/gofkius.png" 
      />
      <Work title="Junior Developer Intern" company="Nowake Studio" duration="May 2025 - Jun 2025"
      description="Worked on creating a prototype no-code tool to manage custom Maya nodes utilizing PySide6 and MayaPy" logoUrl="/logos/nowake.png" 
      />

      {/* Contact Section */}

      <h1 className="text-white mb-10 text-large opacity-50">Contact</h1>

      <div className="flex gap-15 mb-50">
        <Contact redirectUrl="mailto:eizosas@gmail.com" imageUrl="/logos/mail.png" altText="Email Icon" />
        <Contact redirectUrl="https://wa.me/602507738" imageUrl="/logos/whatsapp.png" altText="WhatsApp Icon" />
        <Contact redirectUrl="https://github.com/gofkius" imageUrl="/logos/github.webp" altText="GitHub Icon" />
      </div>
      <footer className="text-white mb-10 opacity-50">
        Gabrielius Dikcius
      </footer>
    </div>
  )
}

export default App
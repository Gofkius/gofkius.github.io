import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { TypingAnimation } from "@/components/ui/typing-animation"

function App() {
  return (
    <div className="bg-background relative flex h-[600px] w-full items-center justify-center dark">
      <div className="flex flex-col items-center justify-center relative">
        <TypingAnimation className="text-6xl font-bold mb-4 z-10 dark:text-white">Hey, I'm Gabriel! 👋</TypingAnimation>
        <Button variant="default" className="z-10">
          Get Started
        </Button>
      </div>
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  )
}

export default App
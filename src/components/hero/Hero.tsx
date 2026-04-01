import { TypingAnimation } from '../ui/typing-animation'
import { InteractiveGridPattern } from '../ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'

const Hero = () => {

  let phrases = [
    "I'm a Developer.",
    "I'm a Designer.",
    "And an animal lover!",
  ]

  return (
    <div className="bg-background relative flex h-[600px] w-full items-center justify-center dark">
      <div className="flex flex-col items-center justify-center relative">
        <TypingAnimation className="text-4xl md:text-6xl font-bold mb-4 z-10 dark:text-white text-center px-4">Hey, I'm Gabriel! 👋</TypingAnimation>
        <TypingAnimation

          className="text-xl md:text-2xl z-10 dark:text-white text-center px-4"
          words={[
            phrases[0],
            phrases[1],
            phrases[2],
          ]}
          typeSpeed={100}
          deleteSpeed={30}
          pauseDelay={1500}
          loop
        />
      </div>
      <InteractiveGridPattern
        className={cn(
          "[mask-image:linear-gradient(black,transparent)]",
          "[-webkit-mask-image:linear-gradient(black,transparent)]",
          "opacity-70",
        )}
      />
    </div>
  )
}

export default Hero
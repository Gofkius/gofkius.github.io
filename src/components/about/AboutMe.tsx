import { useEffect, useState } from 'react'
import './about.css'
import { TypingAnimation } from '../ui/typing-animation'

const AboutMe = () => {

  const [loadFinished, setLoadFinished] = useState(false)

  const aboutMeWords = [
    "initializing...",
    "hacking the world wide web...",
    "loaded about me successfully!",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadFinished(true)
    }, 5500); // 5.5 seconds

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className='about relative bg-background dark border-1 w-[90%] max-w-[50rem] min-h-[20rem] h-auto text-white mb-20 flex flex-col'>
        <div className='aboutTab w-full h-[2rem] border-b-1 font-jetbrains-mono flex items-center px-2 m-0 shrink-0'>
            <h1>about_me</h1>
            <img className="ml-auto h-[1.5rem]" src="/about-close.svg" alt="About Icon" />
        </div>
        {!loadFinished && (
          <div className='p-2 m-0 h-[5rem] w-full flex-1'>
            <TypingAnimation className='leading-8 md:leading-0 m-0 p-0 text-sm md:text-base' startOnView={true} typeSpeed={30} pauseDelay={1000} words={aboutMeWords} deleteSpeed={1}/>
          </div>
        )}
        {loadFinished && (
        <div className='relative m-0 p-0 flex-1 flex flex-col md:flex-row'>
          <div className='aboutbodytext p-4 md:p-2 w-full md:w-[calc(100%-18rem)] flex-1 text-sm md:text-base'>
            <p>21 y/o computer science student looking for opportunities to grow
              and contribute in the tech industry. Currently working as a
              full-stack developer at <a className='underline' href='https://www.dreamdirectllc.com/' target='_blank'>Dream Direct LLC</a>
            </p>
            <br />
            <p>Proficient in Java, TypeScript, and Node.js</p>
            <br />
            <p>Usually working with frameworks such as Vite for React and Expo for React Native and Express.js for back-end development</p>
            <br />
          </div>
          <div className='aboutImage overflow-y-hidden border-t-1 md:border-t-0 md:border-l-1 p-3 w-full md:min-w-[18rem] md:w-[18rem] h-48 md:h-auto flex justify-center items-center shrink-0'>
            <img className='h-32 w-32 md:h-[16rem] md:w-[16rem] object-cover rounded-[50%]' src="/me2.jpeg" alt="About Me Photo" />
          </div>
        </div>
        )}
    </div>
  )
}

export default AboutMe
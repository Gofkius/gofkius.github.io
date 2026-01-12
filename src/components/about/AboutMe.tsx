import React, { use, useEffect, useState } from 'react'
import './about.css'
import { TypingAnimation } from '../ui/typing-animation'


type Props = {}

const AboutMe = (props: Props) => {

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
    <div className='about relative bg-background dark border-1 w-[50rem] h-[20rem] text-white mb-20'>
        <div className='aboutTab w-full h-[2rem] border-b-1 font-jetbrains-mono flex items-center px-2 m-0'>
            <h1>about_me</h1>
            <img className="ml-auto h-[2rem]" src="src/assets/about-close.svg" alt="About Icon" />
        </div>
        {!loadFinished && (
          <div className='p-2 m-0 h-[5rem] w-full'>
            <TypingAnimation className='leading-0 m-0 p-0' startOnView={true} typeSpeed={30} pauseDelay={1000} words={aboutMeWords} deleteSpeed={1}/>
          </div>
        )}
        {loadFinished && (
        <div className='relative m-0 p-0 h-[calc(100%-2rem)] flex flex-row'>
          <div className='aboutbodytext p-2 h-full w-[calc(100%-18rem)]'>
            <p>20 y/o computer science student looking for opportunities to grow
              and contribute in the tech industry. Currently working as a
              full-stack developer at <a className='underline' href='https://www.dreamdirectllc.com/' target='_blank'>Dream Direct LLC</a>
            </p>
            <br />
            <p>Proficient in Java, TypeScript, and Node.js</p>
            <br />
            <p>Usually working with frameworks such as Vite for React and Expo for React Native and Express.js for back-end development</p>
            <br />
          </div>
          <div className='aboutImage overflow-y-hidden border-l-1 p-3 min-w-[18rem] h-full'>
            <img className='h-full w-full object-cover rounded-[50%]' src="src/assets/me2.jpeg" alt="About Me Photo" />
          </div>
        </div>
        )}
    </div>
  )
}

export default AboutMe
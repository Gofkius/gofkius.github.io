type Props = {
    title: string,
    company: string,
    duration: string,
    description: string
    logoUrl: string,
}

const Work = (props: Props) => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-10 mb-10 md:mb-15 w-[90%] max-w-[40rem] text-center md:text-left'>
        <div className='w-full'>
            <h1 className='text-xl md:text-2xl font-bold'>{props.title}</h1>
            <h2 className='text-base md:text-lg opacity-70 mb-5'>{props.company} | {props.duration}</h2>
            <p className='text-sm md:text-base px-2 md:px-0'>{props.description}</p>
        </div>
        <div>
            <img className='h-24 w-24 md:h-40 md:w-40 object-contain' src={props.logoUrl} alt={`${props.company} Logo`} />
        </div>
    </div>
  )
}

export default Work
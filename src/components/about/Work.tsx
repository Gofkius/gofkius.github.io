type Props = {
    title: string,
    company: string,
    duration: string,
    description: string
    logoUrl: string,
}

const Work = (props: Props) => {
  return (
    <div className='text-white flex justify-between items-center gap-10 mb-15 w-[40rem]'>
        <div className='w-full'>
            <h1 className='text-2xl font-bold'>{props.title}</h1>
            <h2 className='text-large opacity-70 mb-5'>{props.company} | {props.duration}</h2>
            <p>{props.description}</p>
        </div>
        <div>
            <img className='h-40 w-40 object-contain' src={props.logoUrl} alt={`${props.company} Logo`} />
        </div>
    </div>
  )
}

export default Work
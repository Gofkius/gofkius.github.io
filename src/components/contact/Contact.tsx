type Props = {
    imageUrl: string,
    altText: string,
    redirectUrl: string,
}

const Contact = (props: Props) => {
  return (
    <div>
        <a href={props.redirectUrl}><img className='h-10 w-10 object-contain' src={props.imageUrl} alt={props.altText} /></a>
    </div>
  )
}

export default Contact
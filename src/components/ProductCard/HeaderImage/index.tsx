type Props = {
  image: string
  name: string
}

const HeaderImage = (props: Props) => {
  return <img src={props.image} className="card-img-top" alt={props.name} />
}

export default HeaderImage

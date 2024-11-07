type Props = {
    name: string
    price: number,
    description: string
  }

const Details = ({ name, price, description }: Props) => {
  return (
    <>
      <h3 className="card-title">{name}</h3>
      <h5>${price}</h5>
      <p className="card-text">{description}</p>
    </>
  )
}

export default Details

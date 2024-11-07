import Details from '../Details'
import BuyNowButton from '../BuyNowButton'

type Props = {
  name: string
  price: number
  description: string
  link: string
}

const CardBody = (props: Props) => {
  const { name, price, description, link } = props

  return (
    <div className="card-body">
      <Details name={name} price={price} description={description} />
      <BuyNowButton link={link} />
    </div>
  )
}

export default CardBody

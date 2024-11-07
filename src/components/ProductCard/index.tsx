import PropTypes from 'prop-types'
import CardBody from './CardBody'
import HeaderImage from './HeaderImage'

type Props = {
  name: string
  price: number
  description: string
  link: string
  image: string
}

const ProductCard = (props: Props) => {
  const { name, price, description, link, image } = props

  return (
    <div className="card" style={{ width: '24rem' }}>
      <HeaderImage image={image} />
      <CardBody
        name={name}
        price={price}
        description={description}
        link={link}
      />
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProductCard

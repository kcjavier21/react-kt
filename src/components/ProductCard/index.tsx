import PropTypes from 'prop-types';

type Props = {
  name: string
  price: number,
  description: string
  link: string
  image: string
}

const ProductCard = (props: Props) => {
  const { name, price, description, link, image } = props

  return (
    <div className="card" style={{ width: '24rem' }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h5>{price}</h5>
        <p className="card-text">{description}</p>
        <a href={link} target="_blank" className="btn btn-primary">
          Buy Now
        </a>
      </div>
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

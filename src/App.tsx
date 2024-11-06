import './App.css'
import ProductCard from './components/ProductCard'
import fordMustangData from './assets/data/car'

function App() {
  const { name, price, description, link, image } = fordMustangData

  return (
    <>
      <ProductCard
        name={name}
        price={price}
        description={description}
        link={link}
        image={image}
      />
    </>
  )
}

export default App

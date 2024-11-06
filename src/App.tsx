import './App.css'
import fordMustang from './assets/images/2025_ford_mustang.avif'

function App() {
  return (
    <>
      <div className="card" style={{ width: '24rem' }}>
        <img src={fordMustang} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">2025 Ford Mustang</h3>
          <h5>$33515.00</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            consectetur.
          </p>
          <a
            href="https://www.edmunds.com/ford/mustang/"
            target="_blank"
            className="btn btn-primary"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  )
}

export default App

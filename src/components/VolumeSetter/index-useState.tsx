import React, { useState } from 'react'

const VolumeSetterUseState: React.FC = () => {
  const [volume, setVolume] = useState<number>(0)

  // Handler functions for increment and decrement
  const increment = () => {
    if (volume === 10) return
    setVolume(volume + 1)
  }

  const decrement = () => {
    if (volume === 0) return
    setVolume(volume - 1)
  }

  return (
    <div className="container text-center mt-4">
      <div className="alert alert-info">
        <p className="h4">Volume: {volume}</p>
      </div>

      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-danger" onClick={decrement}>
          -
        </button>

        <button className="btn btn-success" onClick={increment}>
          +
        </button>
      </div>
    </div>
  )
}

export default VolumeSetterUseState

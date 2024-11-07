import { useReducer } from 'react'

type State = {
  volume: number
}

type Action = { type: 'increment' } | { type: 'decrement' }

const initialState: State = { volume: 0 }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      if (state.volume === 10) return { volume: 10 };
      return { volume: state.volume + 1 }
    case 'decrement':
      if (state.volume === 0) return { volume: 0 };
      return { volume: state.volume - 1 }
    default:
      throw new Error('Unknown action')
  }
}

const VolumeSetter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container text-center mt-4">
      <div className="alert alert-info">
        <p className="h4">Volume: {state.volume}</p>
      </div>

      <div className="d-flex justify-content-center gap-2">
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>

        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default VolumeSetter

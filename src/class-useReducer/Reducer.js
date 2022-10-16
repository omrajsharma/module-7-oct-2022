import React from 'react'

const initialState = {
    count: 0
}

function reducer(state, action) {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: action.payload }
        default:
            return state
    }
}

function Reducer() {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  console.log('state', state)

  return (
    <div>Reducer

        <div>Count: {state.count}</div>

        <button onClick={() => {
            dispatch({type: 'increment'})
        } } >inc</button>

        <button
            onClick={() => {
                dispatch({type: 'decrement'})
            }}>
        dec
        </button>


        <button
            onClick={() => {
                dispatch({type: 'reset', payload: 100})
            }}>
        reset
        </button>

    </div>
  )
}

export default Reducer
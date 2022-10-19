import React, { useEffect } from 'react'

function ChildRef() {
    const [useInput, setUseInput] = React.useState('')  // state
    let varInput = 'Om'                                 // variable  
    const inputRef = React.useRef(0)                    // useRef
    const [count, setCount] = React.useState(0)         // state
    // useRef - mutable variable which doen't cause re-render

    const userRef = React.useRef()


    const handleInput = (e) => {
        setUseInput(e.target.value)
        varInput = e.target.value
        console.log('userRef', userRef )
    }

    inputRef.current = inputRef.current + 1;    // no re-render
    // setCount(count + 1)                      // re-render

  return (
    <div>
        <input
            className='ommi'
            type="text"
            onChange={handleInput}
            value={useInput}
            ref={userRef}
        />

        <br></br>
        State : {useInput}

        <br></br>
        Variable : {varInput}

        <br></br>
        Ref : {inputRef.current}
    </div>
  )
}

export default ChildRef
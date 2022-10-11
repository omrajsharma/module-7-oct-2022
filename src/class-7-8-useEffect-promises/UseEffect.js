import React from 'react'

function UseEffect() {
    const [countOne, setCountOne] = React.useState(0)
    const [countTwo, setCountTwo] = React.useState(0)

    React.useEffect(() => {
        console.log('Count One UseEffect');
    }, [countOne])

    React.useEffect(() => {
        console.log('Count Two UseEffect');
    }, [countTwo])

  return (
    <div>UseEffect
        <br></br>

        Count One : {countOne}
        <button onClick={() => {
            setCountOne(countOne+1)
            console.log('Count One UseEffect inside function')
            }} >Inc Count One</button>
        <br></br>

        Count Two : {countTwo}
        <button onClick={() => setCountTwo(countTwo+1)} >Inc Count Two</button>


    </div>
  )
}

export default UseEffect
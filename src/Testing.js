import React from 'react'

function Testing() {
  return (
    <div>
        
        {(10%2) 
        ? <p>Hello world</p>
        : (10%3) 
        ? <p>Hello world Second</p> : <p>Hello world.....</p>}<br/>

    </div>
  )
}

export default Testing
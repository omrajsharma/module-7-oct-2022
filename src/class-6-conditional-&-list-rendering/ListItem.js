import React from 'react'

const productCardStyle = {
    border: '1px solid #EEE',
    padding: '10px',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
}

const productImageStyle = {
    width: '50%'
}

function ListItem({id, productName, price, productImage}) {
  return (
    <div 
        style={productCardStyle}
    >
        <img style={productImageStyle} src={productImage} />
        <h3>{productName}</h3>
        <p>₹ {price}/- </p>
    </div>
  )
}

export default ListItem
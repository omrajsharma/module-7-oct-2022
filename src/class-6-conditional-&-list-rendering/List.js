import React from 'react'
import ListItem from './ListItem'

const products = [
    {
        id: 1,
        productName: 'Apple iPhone 12 (64GB) - Blue',
        price: '47,999',
        productImage: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY436_FMwebp_QL65_.jpg'
    },
    {
        id: 2,
        productName: 'Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)',
        price: '1,200',
        productImage: 'https://m.media-amazon.com/images/I/61vtLhO6fDL._AC_UY436_FMwebp_QL65_.jpg'
    },
    {
        id: 3,
        productName: 'Apple Watch SE (GPS + Cellular, 44mm)',
        price: '27,990',
        productImage: 'https://m.media-amazon.com/images/I/71ZyBh4LQuL._AC_UY436_FMwebp_QL65_.jpg'
    },
    {
        id: 4,
        productName: 'Apple EarPods with 3.5mm Headphone Plug',
        price: '1,700',
        productImage: 'https://m.media-amazon.com/images/I/41YDDVjblsL._AC_UY436_FMwebp_QL65_.jpg'
    },
]

const productListContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

function List() {
  return (
    <div>
        List Items

        <div
            style={productListContainer}
        >
            {
                products.map( product => {
                    return (
                        <ListItem
                            id={product.id}
                            productName={product.productName}
                            price={product.price}
                            productImage={product.productImage}
                        />
                    )
                } )
            }
        </div>


    </div>
  )
}

export default List
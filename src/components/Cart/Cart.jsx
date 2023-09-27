import React, { useState } from 'react'
import './Cart.css'

const Cart = () => {
    const Cosas = [
        {
          Product: {
            id: 1,
            name: 'Football',
            price: 49.99,
          },
        },
        {
          Product: {
            id: 2,
            name: 'Baseball',
            price: 9.99,
          },
        },
        {
          Product: {
            id: 3,
            name: 'Basketball',
            price: 29.99,
          },
        },
      ];
      const [Product, setProduct] = useState(Cosas)
  return (
    <div className='contaCosas'>
        <button onClick={() => {
            console.log(Product);
            setProduct([...Cosas,  
               { Product: {
                id: 4,
                name: 'tatata',
                price: 25678,
              },}])
        }}>Add</button>
        {
        Product.map(cosas => (
            <div key={cosas.Product.id}>
                <h1>{cosas.Product.name}</h1>
                <p>Price: ${cosas.Product.price}</p>
            </div>
        ))
        }
    </div>
  )
}

export default Cart
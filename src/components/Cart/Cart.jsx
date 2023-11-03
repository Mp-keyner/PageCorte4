import React, { useContext, useState } from 'react'
import './Cart.css'
import { MyContext } from '../../context/Context'

const Cart = () => {
    const {Product, setProduct} = useContext(MyContext)
    console.log(Product)
return (
   <>
    <div className='contaCosas'>
        <button onClick={() => {
            console.log(Product);
            setProduct([...Product,  
               { Product: {
                id: 4, 
                name: 'Pizaa',
                price: 25678,
              },}])
        }}>Add</button>
       <div className='Products'>
       { 
        Product.map(x => ( 
            <div key={x.Product.id}>
                <h1>{x.Product.name}</h1>
                <p>Price: ${x.Product.price}</p>
            </div>
        ))
        }
       </div>
    </div>
   </>
  )
}

export default Cart
import React from 'react'
import './FormData.css'
import { useState } from 'react'

const FormData = ({setProduct, Product}) => {

  const [Name, setName] = useState('')
  const [Price, setPrice] = useState('')

  const HandleChangeName = (even) => {
    setName(even.target.value)
    console.log('si esta escribiendo')
    console.log(even.target)
  }
  const HandleChangePrice = (even) => {
    setPrice(even.target.value)
    console.log('si esta Precie')
    console.log(even.target)

  }

  const HandleSubmit = (event) => {
    let number = Product.length
    console.log('Si va')
    event.preventDefault()
    // let ValueName = event.target.Name.value
    // let ValuePrice = event.target.Price.value
    console.log(Product.length)
     setProduct([...Product,  
               { Product: {
                id: number + 1, 
                name: Name,
                price: Price,
              },}])
              setPrice('')
              setName('')
  }

  console.log('Estado desde el Form' + Product)
  return (
    <div className='FormData' onSubmit={HandleSubmit}>
       <form >
        <label htmlFor="Name">
            <p>Name</p>
            <input type="text" name="Name" id="Name" className='Inp' placeholder='Name Product...' value={Name} onChange={HandleChangeName}/>
        </label>
        <label htmlFor="Price">
            <p>Price</p>
            <input type="text" name="Price" id="Inp" placeholder='Price Product...'  value={Price}  onChange={HandleChangePrice}/>
        </label>
        <button>Add Product</button>
       </form>
    </div>
  )
}

export default FormData
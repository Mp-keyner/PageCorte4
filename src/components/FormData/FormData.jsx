import React from 'react'
import './FormData.css'

const FormData = ({setProduct, product}) => {

    const HandleChange = (e) => {
        e.preventDefaul()
        console.log(e)
        setProduct({name: e.target.value})
    }
  return (
    <div className='FormData'>
       <form action="" onSubmit={() =>HandleChange}>
        <label htmlFor="Name">
            <p>Name</p>
            <input type="text" name="Name" id="Inp" placeholder='Name Product...' />
        </label>
        <label htmlFor="Price">
            <p>Price</p>
            <input type="text" name="Price" id="Inp" placeholder='Price Product...' />
        </label>
        <button>Add Product</button>
       </form>
    </div>
  )
}

export default FormData
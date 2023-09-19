import React from 'react'
import './index.css'

const Nav = () => {
  return (
    <nav>
        <div className='listas'>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Pricingx</li>
            </ul>
        </div>
        <div className='logo'>
            <img src="../../../public/img/Estrella.svg" alt="" />
        </div>
        <div>
            <input type="text" placeholder='Search for anything' className='IntSear'/>
        </div>
    </nav>
  )
}

export default Nav
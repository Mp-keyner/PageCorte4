import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './index.css'
import Estado from '../Estado/Estado'
import Cart from '../Cart/Cart'


const Layout = () => {
  console.log('Desde Layout')
  const [count , setCoun] = useState(0)
  console.log(count, 'valor del estado')
  return (
    <>
        <Nav/>
        <section className='Container'>
         <Cart/>
        </section>
        <div className='Container'>
          <h1>
            {count == 10 ? "Hello People" : 'na'}
          </h1>
         </div>
        <div className='Container'>
          <Estado count={count} setCoun={setCoun}/>
        </div>
    </>
  )
}

export default Layout
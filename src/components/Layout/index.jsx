import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './index.css'
import Estado from '../Estado/Estado'


const Layout = () => {
  console.log('Desde Layout')
  const [count , setCoun] = useState(0)
  return (
    <>
        <Nav/>
        <div className='Container'>
          <h1>
            Hello People
          </h1>
          
        </div>
        <div className='Container'>
          <h1>
            {count == 10 ? "Hello People" : 'na'}
          </h1>
        </div>
        <div className='Container'>
          <Estado count={count} FuncionUpdate={setCoun}/>
        </div>
    </>
  )
}

export default Layout
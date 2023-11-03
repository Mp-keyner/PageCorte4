import React, { useContext, useState } from 'react'
import Nav from '../Nav/Nav'
import './index.css'
import Estado from '../Estado/Estado'
import Cart from '../Cart/Cart'
import FormData from '../FormData/FormData'
import { MyContext } from '../../context/Context'
import Btn from '../Btn'
import CarMedical from '../CarMedical'
import Tablas from '../Tablas'


const Layout = () => {
  const {nombre} = useContext(MyContext)
 
  const [count , setCoun] = useState(0)
  return (
    <>
        <Nav/>
        <section className='Container'>
         <Cart />
         <FormData />
        </section>
        <div className='Container'>
          <h1>
            {/* El valor del contador Global es de {counter} */}
            {nombre}
            <Btn >
              CLikc 1
            </Btn>
            <Btn>
              CLikc 2
            </Btn>

          </h1>
         </div>
         <div>
          <CarMedical>
            {'Doctor Juan'}
            esta es una descripcion breve
          </CarMedical>
         </div>
        <div className='Container'>
          <Estado/>
        </div>
        <div style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Tablas/>
        </div>
    </>
  )
}

export default Layout
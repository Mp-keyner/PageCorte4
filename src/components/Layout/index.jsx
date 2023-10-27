import React, { useContext, useState } from 'react'
import Nav from '../Nav/Nav'
import './index.css'
import Estado from '../Estado/Estado'
import Cart from '../Cart/Cart'
import FormData from '../FormData/FormData'
import { MyContext } from '../../context/Context'


const Layout = () => {

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
        name: 'B  asketball',
        price: 29.99,
      },
    },
  ];
  const [Product, setProduct] = useState(Cosas)

  console.log('Desde Layout')
  const [count , setCoun] = useState(0)
  console.log(count, 'valor del estado')
  console.log(Product)
  const {counter} = useContext(MyContext)
  return (
    <>
        <Nav/>
        <section className='Container'>
         <Cart Product={Product} setProduct={setProduct}/>
         <FormData Product={Product} setProduct={setProduct}/>
        </section>
        <div className='Container'>
          <h1>
            El valor del contador Global es de {counter}
          </h1>
         </div>
        <div className='Container'>
          <Estado count={count} setCoun={setCoun}/>
        </div>
    </>
  )
}

export default Layout
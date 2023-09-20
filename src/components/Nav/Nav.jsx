import React, { useState } from 'react'
import './index.css'

const Nav = () => {
    const [show, setShow] = useState(false)
    const HandlerMenu = () => {
        console.log('si', show)
        setShow(!show)
    }
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
            <p>Logo</p>
        </div>
        <div className='menu'>
            <img src="../../../public/img/Menu.svg" alt="" onClick={HandlerMenu}/>
        </div>
        <div className='Buscar'>
            <span>
            <img src="../../../public/img/Lupa.svg" alt="" />
            <input type="text" placeholder='Search for anything' className='IntSear'/>
            </span>
        </div>
        <div className={`MenuDes ${show ? 'Show' : 'hide'} `}>
        <div className='logo'>
            <img src="../../../public/img/Estrella.svg" alt="" />
            <p>Logo</p>
        </div>
        <div className='Buscar2'>
            <span>
            <img src="../../../public/img/Lupa.svg" alt="" />
            <input type="text" placeholder='Search for anything' className='IntSear'/>
            </span>
        </div>
        <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Pricingx</li>
            </ul>
            <img src="../../../public/img/x.svg" alt="" className='x' onClick={HandlerMenu}/>
        </div>
    </nav>
  )
}

export default Nav
import React, { useState } from 'react'
import './index.css'
import Estrella from "../../../public/img/Estrella.svg"
import Menu from "../../../public/img/Menu.svg"
import Lupa from "../../../public/img/Lupa.svg"
import x from "../../../public/img/x.svg"

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
            <img src={Estrella} alt="" />
            <p>Logo</p>
        </div>
        <div className='menu'>
            <img src={Menu} alt="" onClick={HandlerMenu}/>
        </div>
        <div className='Buscar'>
            <span>
            <img src={Lupa} alt="" />
            <input type="text" placeholder='Search for anything' className='IntSear'/>
            </span>
        </div>
        <div className={`MenuDes ${show ? 'Show' : 'hide'} `}>
        <div className='logo'>
            <img src={Estrella} alt="" />
            <p>Logo</p>
        </div>
        <div className='Buscar2'>
            <span>
            <img src={Lupa} alt="" />
            <input type="text" placeholder='Search for anything' className='IntSear'/>
            </span>
        </div>
        <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Pricingx</li>
            </ul>
            <img src={x} alt="" className='x' onClick={HandlerMenu}/>
        </div>
    </nav>
  )
}

export default Nav

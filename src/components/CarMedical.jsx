import React, { useContext } from 'react'
import { MyContext } from '../context/Context'

const CarMedical = ({children}) => {
    console.log(children)
    const [x,y,z] = children
    const {myState, counter,Increment} = useContext(MyContext)
  return (
    <>
        <div>
           <img src={x} alt="" />
           <p>{y}</p>
           <p>{z}</p>
           <p>{myState}</p>
           <p>{counter}</p>
           <button onClick={() => Increment()}> click</button>
        </div>
    </>
  )
}

export default CarMedical
import React, { useContext, useEffect } from 'react'
import './Estado.css'
import { useState } from 'react'
import useCounter from '../../hook/useCounter'
import { MyContext } from '../../context/Context'


const Estado = () => {
  const {myState, counter, Increment} = useContext(MyContext)
  const Contador1 = useCounter()
  const Contador2 = useCounter()
  const Contador3 = useCounter()
  console.log(myState)
  return (
    <>
    <button onClick={Increment}>{counter} Counter</button>
    </>
  )
}

export default Estado
import React, { useContext, useEffect } from 'react'
import './Estado.css'
import { useState } from 'react'
import useCounter from '../../hook/useCounter'
import { MyContext } from '../../context/Context'


const Estado = () => {
  // const {myState, counter, Increment} = useContext(MyContext)
  const Contador1 = useCounter()
  const Contador2 = useCounter()

  return (
    <>
    <button onClick={Contador1.Increment}>{Contador1.counter} Counter 1</button>
    <button onClick={Contador2.Increment}>{Contador2.counter} Counter 2</button>
    </>
  )
}

export default Estado
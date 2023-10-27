import React, { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)
  const Increment = () =>{
    setCounter(counter + 1 )
  }
  const Decrement = () =>{
    setCounter(counter - 1 )
  }
  const Reset = () =>{
    setCounter(0)
  }
  return {
    Increment,
    Decrement,
    Reset,
    counter
  }
}

export default useCounter
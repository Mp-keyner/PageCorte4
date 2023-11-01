import React, { useContext } from 'react'
import { MyContext } from '../context/Context'

const Btn = (props) => {
    console.log(props.children)
    console.log()
    const {counter} = useContext(MyContext)
  return (
    <>
    <button onClick={() => props.children[1]()}>{counter}</button>
    </>
  )
}

export default Btn
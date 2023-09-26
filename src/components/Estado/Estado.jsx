import React, { useState } from 'react'

const Estado = ({count, FuncionUpdate}) => {
  const [disabled, setDisabled] = useState(false);
    console.log(count)
    console.log('Desde Estado')
    const View = (x) => {
      FuncionUpdate(x)
      console.log(x)
      count == 19 ? setDisabled(true) : setDisabled(false)
    }
  return (
    <>
        <button disabled={disabled} onClick={() => View(count + 1)}>{count}View</button>
        <button  onClick={() => View(0)}>reset</button>
    </>
  )
}

export default Estado
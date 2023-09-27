import React from 'react'

const Estado = (prop) => {
  return (
    <>
    <button disabled={prop.count == 20 ? true 
    : false} onClick={() => prop.setCoun(prop.count +1)}>{prop.count}Comentarios</button>
    </>
  )
}

export default Estado
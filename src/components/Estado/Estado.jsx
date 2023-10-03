import React from 'react'
import './Estado.css'

const Estado = (prop) => {
  return (
    <>
    <button 
    className='botoCoun'
    disabled={prop.count == 20 ? true 
    : false} onClick={() => prop.setCoun(prop.count +1)}>{prop.count} Comentarios</button>
    </>
  )
}

export default Estado
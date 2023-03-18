import React, { useEffect, useState } from 'react'

const EffectMouse = () => {
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)

    const logMousePosition = e =>{
    console.log(`Mouse Event`)
    setX(e.client)
    setY(e.client)
    }

    useEffect(()=>{
     console.log(`useEffect Called`)
     window.addEventListener('mousemove', logMousePosition)
    },[])
  return (
    <div>
      Hooks X - {X} , Y {Y}
    </div>
  )
}

export default EffectMouse

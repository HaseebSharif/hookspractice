import React from 'react'
import {useState} from 'react'

const HookCounter = () => {
    const [count, setcount] = useState('Click Below to subscribe')
    
  return (
    <div>
      <button >{count}</button> <br></br>
      <button onClick={()=>{setcount("Thanks FOr Subscribing")}}>SubScribe</button>
      {/* <button onClick={()=>{setcount(count-1)}}>Decrement</button> */}
      
    </div>
  )
}

export default HookCounter

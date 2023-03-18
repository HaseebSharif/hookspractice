import React,{useState,useEffect} from 'react'

const EffectHook = () => {
    const [count,setCount]= useState(0)

    useEffect(()=>{
        document.title = `Count ${count} times`
    })
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Clicked {count}  times</button>
    </div>
  )
}

export default EffectHook

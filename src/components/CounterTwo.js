import React ,{useState}from 'react'

const CounterTwo = () => {
    const initialCount = 0
    const [count,setCount]=useState(initialCount)
   const  incrementFive =()=>{
    for(let i=0;i<5;i++){
        setCount(previouscount=>previouscount+1)}
    }
  return (
    <div>
      count : {count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(previouscount=>previouscount+1)}>IncreMent</button>
      <button onClick={()=>setCount(previouscount=>previouscount-1)}>DecreMent</button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default CounterTwo

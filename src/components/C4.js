import React, { useState } from 'react'

const C4 = () => {
    const [items, setItems]=useState([])
    const addValue=()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
      <button onClick={addValue}>Add Item</button>
      <ul>
        {
            items.map(items=>(
                <li key={items.id}>{items.value}</li>
            ))
        }
      </ul>

    </div>
  )
}

export default C4

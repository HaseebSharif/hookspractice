import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [Post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [Btnid,setBtnid]=useState(1)

const handleClick = () => {
    setBtnid(id)
}    

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${setBtnid}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        }).catch(()=>{
            console.log('error')
        })
    },[setBtnid])
  return (
    <div>
      
      <input type='test' value={id} onChange={e=>{setId(e.target.value)}} />
      <button type='button' onClick={handleClick} >Fetch Data</button>
      <h2>{Post.title}</h2>
    </div>
  )
}

export default DataFetching

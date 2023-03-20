import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Reducerdatafetching = () => {
    const [loading,setLoading]=useState(true)
    const [post,setPost]=useState({})
    const [error,setError]=useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false)
            setPost(res.data)
            setError("Page Not Found")
        })
        .catch(()=>{
            setLoading(false)
            setPost({})
            setError("Error")
        })
    })
  return (
    <div>
        {loading ? 'loading': post.title}
        {error ? error:null}
      
    </div>
  )
}

export default Reducerdatafetching

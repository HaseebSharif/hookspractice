import React , {useReducer,useEffect}from  'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post : {},
    error:''
}
const reducer = (state,action)=>{
    switch(action.type)
{
    case "Fetched_Successfully":
    return {
        loading:false,
        post:action.payload,
        error:"Error"
    }
    case "Fetch_Error":
        return {
            loading:false,
            post: {},
            error: "Something Went Wrong"
        }
        default:
            return state
        
        
}


}
const ReducerDatafetching2 = () => {
    const [state,dispatch]= useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'Fetched_Successfully',payload:res.data})
        })
        .catch(()=>{
            dispatch({type:'Fetch_Error'})
        })
    })
  return (
    <div>
      {state.loading ? 'loading': state.post.title}
        {state.error ? state.error:null}
    </div>
  )
}

export default ReducerDatafetching2


import React,{useReducer} from 'react';
import './App.css';
import RA from './RA';
import RB from './RB';
import RC from './RC';
import ReducerDatafetching2 from './ReducerDatafetching2';
// import Reducerdatafetching from './Reducerdatafetching';

// import COmponentC from './COmponentC';
// import DataFetching from './DataFetching';
// const initialState = 0
// const reducer =(state,action)=>{
//     switch(action)
//     {
//         case 'increment':
//             return state +1;
//         case 'decrement':
//             return state -1;
//         case 'reset':
//             return initialState;
//             default:
//                 return state
//     }
    

// }

// export const CountContext = React.createContext()

function App() {
  // const [count,dispatch ]= useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
      {/* <h2>Count-{count}</h2> */}
      <ReducerDatafetching2/>
    </div>
    // </CountContext.Provider>
  );
}

export default App;


import React from 'react';
import './App.css';
import COmponentC from './COmponentC';
// import DataFetching from './DataFetching';


export const userContext = React.createContext()
export const channelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <userContext.Provider value={'Haseeb'}>
        <channelContext.Provider value={'Sharif'}>
        <COmponentC/>
        </channelContext.Provider>
      
      </userContext.Provider>
      
    </div>
  );
}

export default App;

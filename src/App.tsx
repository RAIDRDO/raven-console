import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useEffect(()=>{console.error("rendered second")},[])
  return (
<div className="App">
<button
    onClick={() => { console.log("testing log");}}>
    test console.log   
</button> 
<button
    onClick={() => { console.error("testing error");}}>
    test console.error   
</button>   
<button
    onClick={() => { console.warn("testing warn");}}>
    test console.warn   
</button>   
<button
    onClick={() => { console.info("testing info");}}>
    test console.info   
</button>   
</div>
  );
}

export default App;

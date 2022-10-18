import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{console.error("rendered second")},[])
  return (
    <div className="App">
<button
    onClick={() => { console.log("button clicked");}}>
    button  
</button>    
</div>
  );
}

export default App;

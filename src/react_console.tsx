import {useState,useEffect} from 'react';
import Console_fab from './console_fab';
import Console_panel from './console_panel' 
const Console = () => {

    useEffect(()=>{
        console.error("rendered first")
        let curry = f => { let out = log => {setsavedLogs(savedLogs=>[...savedLogs,log]) 
        f(log);}
    return out}

    console.log = curry(console.log)},[])
    const [savedLogs, setsavedLogs] = useState([]);
    const [Toggled, setToggled] = useState(true);
    //use currying to wrap console.log 
    
    
    return (
        <div>
        {Toggled ===true ? (<Console_panel setToggled={setToggled} savedLogs={savedLogs}></Console_panel>) : (<Console_fab setToggled={setToggled}></Console_fab>)}

        </div>
    );
}
 
export default Console;
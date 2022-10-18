import {useState,useEffect} from 'react';
 
const Console = () => {

    useEffect(()=>{let curry = f => { let out = log => {setsavedLogs(savedLogs=>[...savedLogs,log]) 
        console.error(log)
        f(log);}
    return out}

    console.log = curry(console.log)},[])
    const [savedLogs, setsavedLogs] = useState([]);
    //use currying to wrap console.log 
    
    return (
        <div>
            {savedLogs.map((log:string,index:number)=>(
               <p key={index}>{log}</p> 
            ))}

        </div>
        
    );
}
 
export default Console;
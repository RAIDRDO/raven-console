import {useState} from 'react';
 
const Console = () => {
    const [savedLogs, setsavedLogs] = useState([]);
    // let savedLogs:[string] = ["test"];
    let curry = f => {
    let out = log => {
        setsavedLogs(savedLogs=>[...savedLogs,log])
        f(log);
    }
    return out}
    console.log = curry(console.log)
    return (
        <div>
            {savedLogs.map((log:string,index:number)=>(
               <p key={index}>{log}</p> 
            ))}

        </div>
        
    );
}
 
export default Console;
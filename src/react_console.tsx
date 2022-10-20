import {useState,useEffect} from 'react';
import Console_fab from './console_fab';
import Console_panel from './console_panel' 
import objectInspect from "object-inspect";
import { nanoid } from 'nanoid';
import {Logs} from './shared/types'
const Console = () => {



const [savedLogs, setsavedLogs] = useState<Logs[]>([]);
const [Toggled, setToggled] = useState(true);
useEffect(()=>{
function intercept(){
    const oldLog = console.log;
    const oldWarn = console.warn;
    const oldInfo = console.info;
    const oldError = console.error;
    // const oldClear = console.clear

    console.log = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:nanoid(),log_type:"log",log_msg:formatedlogs}])      
        oldLog.call(console, ...args);
    };

    console.warn = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:nanoid(),log_type:"warn",log_msg:formatedlogs}])      
        oldWarn.call(console, ...args);
    };

    console.info = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:nanoid(),log_type:"info",log_msg:formatedlogs}])      
        oldInfo.call(console, ...args);
    };

    console.error = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:nanoid(),log_type:"error",log_msg:formatedlogs}])      
        oldError.call(console, ...args);
    };

    // console.clear = function () {
    //    setsavedLogs([])    
    //    oldClear();
    // };

};
intercept()
},[])

    
    
    return (
        <div>
        {Toggled ===true ? (<Console_panel setToggled={setToggled} savedlogs={savedLogs}></Console_panel>) : (<Console_fab logcount = {savedLogs.length} setToggled={setToggled}></Console_fab>)}

        </div>
    );
}
 
export default Console;
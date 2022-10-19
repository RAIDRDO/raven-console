import {useState,useEffect} from 'react';
import Console_fab from './console_fab';
import Console_panel from './console_panel' 
import objectInspect from "object-inspect";
const Console = () => {

useEffect(()=>{
function intercept(){
    const oldLog = console.log;
    const oldWarn = console.warn;
    const oldInfo = console.info;
    const oldError = console.error;
    // const oldClear = console.clear

    console.log = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:savedLogs.length,log_type:"log",log_msg:formatedlogs}])      
        oldLog.call(console, ...args);
    };

    console.warn = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:savedLogs.length,log_type:"warn",log_msg:formatedlogs}])      
        oldWarn.call(console, ...args);
    };

    console.info = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:savedLogs.length,log_type:"info",log_msg:formatedlogs}])      
        oldInfo.call(console, ...args);
    };

    console.error = function (...args) {
        const formatedlogs = objectInspect(...args)
        setsavedLogs(savedLogs=>[...savedLogs,{index:savedLogs.length,log_type:"error",log_msg:formatedlogs}])      
        oldError.call(console, ...args);
    };

    // console.clear = function () {
    //    setsavedLogs([])    
    //    oldClear();
    // };

};
intercept()
},[])
    const [savedLogs, setsavedLogs] = useState([]);
    const [Toggled, setToggled] = useState(true);
    //use currying to wrap console.log 
    
    
    return (
        <div>
        {Toggled ===true ? (<Console_panel setToggled={setToggled} savedLogs={savedLogs}></Console_panel>) : (<Console_fab logcount = {savedLogs.length} setToggled={setToggled}></Console_fab>)}

        </div>
    );
}
 
export default Console;
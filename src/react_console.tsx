import {useState,useEffect} from 'react';
 
const Console = () => {

    useEffect(()=>{
        console.error("rendered first")
        let curry = f => { let out = log => {setsavedLogs(savedLogs=>[...savedLogs,log]) 
        f(log);}
    return out}

    console.log = curry(console.log)},[])
    const [savedLogs, setsavedLogs] = useState([]);
    const [Toggled, setToggled] = useState(false);
    //use currying to wrap console.log 
    
    
    return (
        
        <div className={'Toggled? :hidden container mx-auto rounded-lg bg-gray-900 z-99999 fixed bottom-0 right-0 left-0 max-w-6xl h-96 max-h-96 overflow-auto scrollbar '}>
            <div className='bg-slate-800 h-16 sticky top-0'>
            <button onClick={()=>(setToggled(true))}>close</button>
            </div>
            <div >
                
                {savedLogs.map((log:string,index:number)=>(
                    <div className='border-solid border-l-8 border-l-green-500 border-y border-gray-600 hover:bg-gray-600 '>
                    <p  key={index} className="ml-2 font-mono text-white">{log}</p> 
                    </div>
            ))}
            </div>
           

        </div>
        
    );
}
 
export default Console;
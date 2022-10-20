import {Logs} from './shared/types'


const Console_log_item = ({index,log_type,log_msg}:Logs) => {
    return ( 
        <>
           

           {log_type ==="log" ?
             <div key={index} className='border-solid border-l-8  border-l-green-500  border-y border-slate-700 hover:bg-slate-700 '>
                    <p className="ml-2 font-mono text-white">{log_msg}</p> 
            </div>
            :  log_type==="error"? 
             <div key={index} className='border-solid border-l-8 log.type ==="logs"? border-l-rose-500 :border-l-red-500 border-y border-slate-700 hover:bg-slate-700 '>
                    <p className="ml-2 font-mono text-white">{log_msg}</p> 
            </div>
            :  log_type==="warn"? 
             <div key={index} className='border-solid border-l-8 log.type ==="logs"? border-l-yellow-500 :border-l-red-500 border-y border-slate-700 hover:bg-slate-700 '>
                    <p className="ml-2 font-mono text-white">{log_msg}</p> 
            </div>
            :
             <div key={index} className='border-solid border-l-8 log.type ==="logs"? border-l-cyan-500 :border-l-red-500 border-y border-slate-700 hover:bg-slate-700 '>
                    <p className="ml-2 font-mono text-white">{log_msg}</p> 
            </div>

        }
           
          
        </>
     );
}
 
export default Console_log_item;
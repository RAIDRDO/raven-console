import Console_log_item from "./console_log_item";
import { Logs } from "./shared/types";
const Console_panel = ({savedlogs,setToggled}:{savedlogs:Logs[],setToggled:Function}) => {
    return ( 
        <div className={'container shadow-sm mx-auto rounded-lg bg-gray-900 z-99999 fixed bottom-0 right-0 left-0 max-w-6xl h-96 max-h-96 transition-all duration-150 ease-in-out  '}>
            <div className='bg-gray-800 h-16 sticky top-0 rounded-lg'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 m-2 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <button className="float-right focus:outline-none rounded-tr-lg text-white focus:bg-red-400 bg-rose-600 hover:bg-red-500 font-medium font-mono border-0 text-sm px-4 py-1.5" onClick={()=>(setToggled(false))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            </button>
            </div>
          <div className="overflow-auto scrollbar h-80">
                {savedlogs.map((log:Logs,index:number)=>(
                    <Console_log_item key={index} {...log}></Console_log_item>
                  
            ))}
            </div>
           

        </div>

     )
}
 
export default Console_panel;
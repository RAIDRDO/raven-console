const Console_panel = ({savedLogs,setToggled}) => {
    return ( 
        <div className={'container shadow-sm mx-auto rounded-lg bg-gray-900 z-99999 fixed bottom-0 right-0 left-0 max-w-6xl h-96 max-h-96 transition-all duration-150 ease-in-out  '}>
            <div className='bg-gray-800 h-16 sticky top-0 rounded-lg'>
            <button className="float-right focus:outline-none rounded-tr-lg text-white focus:bg-red-400 bg-rose-600 hover:bg-red-500 font-medium font-mono border-0 text-sm px-4 py-1.5" onClick={()=>(setToggled(false))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            </button>
            </div>
            <div className="overflow-auto scrollbar h-80">
                {savedLogs.map((log:string,index:number)=>(
                    <div className='border-solid border-l-8 border-l-green-500 border-y border-slate-700 hover:bg-slate-700 '>
                    <p  key={index} className="ml-2 font-mono text-white">{log}</p> 
                    </div>
            ))}
            </div>
           

        </div>

     )
}
 
export default Console_panel;
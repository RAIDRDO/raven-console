const Console_fab = ({logcount,setToggled}) => {
    return ( 
        <div className="z-99999 fixed bottom-0 right-0 ">
            <button onClick={()=>{setToggled(true)}} className="rounded-full w-16 h-16 mb-8 mr-8 border-0 bg-slate-900 hover:bg-slate-800  focus:bg-gray-700 shadow-lg shadow-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>

                {logcount>0?<span className="animate-ping absolute top-1.5 right-0.5 mr-10 block h-1.5 w-1.5 rounded-full ring-2 ring-cyan-400-400 bg-cyan-600"></span>:<></> }


            </button>
        </div>
     );
}
 
export default Console_fab;
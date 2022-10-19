const Console_fab = ({setToggled}) => {
    return ( 
        <div className="z-99999 fixed bottom-0 right-0 ">
            <button onClick={()=>{setToggled(true)}} className="rounded-full w-16 h-16 mb-8 mr-8">open console</button>
        </div>
     );
}
 
export default Console_fab;
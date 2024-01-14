const AllInOneCounter =({by,increment,decrement})=>{
    return (
    <div className="m-10">            
            <div className="flex justify-center gap-x-10">
                <button onClick={()=>increment(by)} className="bg-blue-500 text-white px-4 py-2 mr-2">+{by}</button>
                <button onClick={()=>decrement(by)} className="bg-red-500 text-white px-4 py-2">-{by}</button>
           </div>   
    </div>
    );
}
export default AllInOneCounter;
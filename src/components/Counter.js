import { useState } from "react";
import AllInOneCounter from "./AllInOneCounter";

const Counter = ()=>{
    const [count,setCount] = useState(0);
    const incrementFunction=(by)=>{
        setCount(count+by);
    }
    const decrementFunction=(by)=>{
        setCount(count-by);
    }
    const resetCounter=()=>{
        setCount(0);
    }
    return (
        <div>
            <div className="text-center">
                <div className="m-7">
                <span className="text-lg font-bold">Count: <span  className="text-blue-500">{count}</span></span>
                </div>
            <div className="  justify-center ">
                
             <AllInOneCounter by={1} increment={incrementFunction} decrement={decrementFunction}/>
            <AllInOneCounter by={3}  increment={incrementFunction} decrement={decrementFunction}/>
            <AllInOneCounter by={5}  increment={incrementFunction} decrement={decrementFunction}/>
            <button className="bg-amber-600" 
                        onClick={resetCounter}
                >Reset</button>
            </div>    
            </div>
        </div>
    )
};
export default Counter;
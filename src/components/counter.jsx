import {useState} from "react"

const Counter = () => {
    const[count, setCount] =useState(0)
    
    const countHandler = () => {
   setCount(count+ 1 )
    };
    const countHandler2 = () => {
        setCount(count-count )
         };
   return(
    <div>
         <h1>{count}</h1>
         <button onClick={countHandler}> Add </button>
         <button onClick={countHandler2}>Reset</button>
    </div>
   )
};

export default Counter
import React, { useState } from "react";

function CounterApp(){
    const [count,setcount]=useState(0)
    function handelincrement(){
        setcount(count+1)
    }
    function handelDecrement(){
        setcount(count-1)
    }
    function handelReset(){
        setcount(0)
    }
    return(
        <>
        <h1>Counter App-</h1>
        <h1>Count-{count}</h1>
        <p>
            <button onClick={()=>setcount(count+1)}>+</button>
            <button onClick={()=>setcount(0)}>Reset</button>
            <button onClick={()=>setcount(count-1)}>-</button>
        </p>

        <p>
            <button onClick={()=> handelincrement()}>increment</button>
            <button onClick={()=> handelReset()}>reset</button>
            <button onClick={()=> handelDecrement()}>decrement</button>
        </p>
        </>
    )
     
}
export default CounterApp



// import React,{useState} from "react";

// function CounterApp(){
// const[count,setcount]=useState(0)

// function handleIncerment(){
// setcount(count+1)
// }
// function handleReset(){
// setcount(0)
// }
// function handleDecerment(){
// setcount(count-1)
// }
// return(

// <>
// <h1>counter app={}</h1>
// <h1>{count}</h1>
// <p>
//     <button onClick={handleIncerment}>+</button>
//     <button onClick={handleReset}>reset</button>
//     <button onClick={handleDecerment}>-</button>

// </p>
// </>
// )
// }
// export default CounterApp






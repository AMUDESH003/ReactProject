import React,{useState,useEffect} from "react";

function ExempleUseEffect(){
    const [count,setCount]=useState(0)
    

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000) 
    })

    return <h1>{count}-count value</h1>
}
export default ExempleUseEffect
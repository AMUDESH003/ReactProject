import React,{useState} from "react";

 function FunctionDate() {
    const [date, setdate]=useState("")
    
    function display(){
        setdate(Date())
    }
    return(
        
        <>
        <h1>time={date}</h1>
        <button onClick={()=>display()}> sho me</button>
        </>
    )
}
export default FunctionDate

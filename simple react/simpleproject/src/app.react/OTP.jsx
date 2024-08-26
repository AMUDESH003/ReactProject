import React,{useState} from "react";
function OtpFunction(){
    const [otp,setOtp]=useState("")
    const [answer,setAnswer]=useState("")

    const handelchange=()=>{
             const value=Math.floor(Math.random()*1000000)
             setAnswer(value.toString(36));
    }

    return(
        <>
        <div>
            <label style={{fontSize:100,color:"black"}} htmlFor="">OTP</label> <br/><br/>
            <input style={{padding:20,margin:10,borderRadius:50,}} type="text" placeholder="Enter Your OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} /><br /> <br />
            <button style={{padding:5,borderRadius:50,width:100,}} onClick={handelchange} >OTP</button>
            
            <div>
                <h4 style={{border:2,borterRadius:50,color:"green",fontSize:50,}}>Your OTP= {answer} </h4>
            </div>
        </div>
        </>
    );
}
export default OtpFunction







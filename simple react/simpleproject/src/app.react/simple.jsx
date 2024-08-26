import React, {useState} from "react";

export default function SImpleinterest(){
    const [principal, setPrincipal] = useState('');
    const [Interest, setInterest] = useState('');
    const [Year,setYear]=useState('');
    const [simpleint,setsimpleint]=useState('')


    function simple(){
        const simples=(principal*Interest*Year)/100
        setsimpleint(simples)
    }
    function reset(){
        setPrincipal('');
        setInterest('');
        setYear('');
        setsimpleint('')
    }


    return(
    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)"}} >
        <section style={{width:"500px",height:"500px",border:"none",textAlign:"center",padding:"25px",borderRadius:"50%" ,boxShadow:"2px 2px 20px "}}>
            <h1 style={{fontSize:"35px"}}>Simple Interest</h1>
        <div >
            <label style={{fontSize:"17px",fontWeight:"600"}} htmlFor="Principle" >Principle Amount (₹)</label><br/>
            <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" placeholder="Enter Principal" value={principal} onChange={(e)=>setPrincipal(e.target.value)}/>
        </div>
        <div>
            <label style={{fontSize:"17px",fontWeight:"600"}}  htmlFor="Interest">Interest Rate (%)</label><br/>
            <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" placeholder="Enter Interest Rate" value={Interest} onChange={(e)=>setInterest(e.target.value)}/>
        </div>
        <div>
            <label style={{fontSize:"17px",fontWeight:"600"}}  htmlFor="Year">Year</label><br/>
            <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" placeholder="Enter Year" value={Year} onChange={(e)=>setYear(e.target.value)}/>
            </div>
            <div>
                <button className="btn" style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={simple}>Calculate</button>
                <button className="btn" style={{width:"100px",height:"30px",borderRadius:"25px",marginleft:"15px",cursor:"pointer",border:"none"}} onClick={reset}>Reset</button>
                
                </div>
                <p style={{fontSize:"17px",fontWeight:"600",marginTop:"25px"}} >Simple Interest:<br/>{simpleint}</p>
                </section>
 </div>
    )
}
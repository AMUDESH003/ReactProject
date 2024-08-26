import React,{useState,useEffect} from "react";

const Apiexample=()=>{
const [data,setdata]=useState()
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json() )
    .then((data)=>setdata(data))
},[])

return(
    <>
    {/* {
        data && data.map((item)=>{
            return <p key={item.id}>{item.albumId}-{item.id}-{item.title}-{item.url}-{item.thumbnailUrl}</p>
            
        })
    } */}



    {data && data.map((item)=>{
        return <div key={item.id}>
            <img src={item.thumbnailUrl} alt="image" />
        </div>
    })}
    </>
)
}
export default Apiexample
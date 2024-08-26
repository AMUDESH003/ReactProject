import React,{useState} from "react"

function FunctionModal(){
    const [data]=useState([
        {name:'john',age:25},
        {name:'jane',age:30},
        {name:'bob',age:45},
        {name:'a',age:1},
        {name:'ab',age:12},
        {name:'abc',age:123},
        {name:'abcd',age:1234},
        {name:'abcde',age:12345},
        {name:'abcdef',age:123456},
        {name:'abcdefg',age:1234567},
        {name:'abcdefgh',age:12345678},
        {name:'abcdefghi',age:123456789},
        {name:'abcdefghij',age:1234567890},

        
    ]);
    const [searchTerm,setSearchTerm]=useState("");

        const filteredData=data.filter(item=>{
        const itemName=item.name.toLowerCase();
        return itemName.includes(searchTerm.toLowerCase());
    });
    return(
        <div>
            <input type="search"value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} />
            <ul>
                {filteredData.map(item =>(
                    <li key={item.name}>{item.name}({item.age})</li>
                ))}
            </ul>
        </div>
    );
}
export default FunctionModal


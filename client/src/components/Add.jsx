import React ,{useState} from "react";
import Axios from "axios";

var Add =()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [description,setDescription]=useState("")
    
    var add =() =>{
        Axios.post("http://localhost:3000/studient",{name:name, age:age , description:description})
        .then((res)=>{
            console.log("updated")
        })
    }

    return(
        <div>
        <input  placeholder="type your name"  onChange={(e)=>{
            setName(e.target.value)
        }}/>
         <input  placeholder="type your age"  onChange={(e)=>{
            setAge(e.target.value)
        }}/>
        <input placeholder="type the description"  onChange={(e)=>{
            setDescription(e.target.value)
        }} />
         <button  onClick={()=>{
            return add();
         }} >Add studient</button>
        </div>
    )
}


export default Add
import React ,{useState} from "react";
import Axios from "axios";
var Add =({setStudient})=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const [description,setDescription]=useState("")
    
    var add = async() =>{
        try{
            const data =  await Axios.post("http://localhost:1000/studient",{name, age , description})
            setStudient((stud)=> [...stud,{id: Math.floor(Math.random() * 35), name, description, age}])
        }catch(err){
            console.log(err)
        }
        // Axios.post("http://localhost:1000/studient",{name, age , description})
    }
    return(
        <div>
        <input  placeholder="type your name"  onChange={(e)=>{
            setName(e.target.value)
        }}/>
         <input  placeholder="type your age" type="number" onChange={(e)=>{
            setAge(e.target.value)
        }}/>
        <input placeholder="type the description"  onChange={(e)=>{
            setDescription(e.target.value)
            
        }} />

.button-7 {
         <button className="" onClick={add} >Add studient</button>
        </div>
    )
}


export default Add
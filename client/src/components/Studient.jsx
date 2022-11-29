import React ,{useState} from "react"
import Axios from "axios"
var Studient =(props)=>{
 const [check,setCheck]=useState(false)
 var del = (id)=>{
  Axios.delete(`http://localhost:3000/studient/${id}`)
  .then((res)=>{
    console.log("oh you deleted me ")
  })
  .catch(err=>{
    console.log(err)
  })
 }
    return (
        <div>
      {props.studient.map((element) => {
        return (
          <div key={element.id}>
            <ul>
             {check===false ? <li onClick={()=>{
                console.log(element.id)
                setCheck(!check)
             }}>{element.name}</li> :
             (
                <div>
                <li onClick={()=>{
                    setCheck(!check)
                }}>{element.age}</li>
                <li>{element.name} <span onClick={()=>{
                    return del(element.id)
                }}>❌</span> </li>
                
                </div>
             )}

            </ul>
          </div>
        );
      })}
        </div>
    )
}

export default Studient 
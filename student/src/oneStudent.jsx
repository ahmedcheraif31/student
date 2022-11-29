import React, { useState } from "react";
import Axios from "axios"
export default function OneStudent({ element }) {
  const [isOnEdit, setIsOnEdit] = useState(false);
//   const [name,setName ] = useState("");
//   const [age,setAge ] = useState(0);

console.log(element)
var del = () => {

    Axios.delete(`http://localhost:1000/studient/${element.idstudient}`)
      .then((res) => {
        console.log("oh you deleted me ")
        // window.location.reload(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="studentContainer" key={element.idstudient}>
      <h3 onClick={() => setIsOnEdit((prev) => !prev)}>EDIT </h3>
      {isOnEdit ? (
        <>
          <input value={element.name} /> 

          <input value={element.age} />{" "}
          <input value={element.description} />

        </>
      ) : (
        <>
          {" "}
          <h5> Name : {element.name}</h5>
          <h5> Age: {element.age}</h5>
          <h5>description: {element.description}</h5>{" "}
          <button  onClick={del} >del studient</button>

        </>
      )}
    </div>
  );
}

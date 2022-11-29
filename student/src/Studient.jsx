import React, { useState } from "react";
import Axios from "axios";
import OneStudent from "./oneStudent";
var Studient = (props) => {
  const [check, setCheck] = useState(false);
  
  return (
    <div>
      {props.studient.map((element, i) => {
        
        return (<OneStudent element={element} key={i} />)
      })}
    </div>
  );
};

export default Studient;

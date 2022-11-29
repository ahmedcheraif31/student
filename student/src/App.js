import React, { useEffect, useState } from "react";
import Axios from "axios";
import Add from "./Add";
import Studient from "./Studient.jsx";
import "./styles.css"

var App = () => {
  const [studient, setStudient] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:1000/Studient").then((res) => {
      setStudient(res.data);
      console.log(studient);
    });
  }, []);
  return (
    <div>
      <h1> welcome</h1>
      <Studient studient={studient} />
      <Add setStudient={setStudient}/>
    </div>
  );
};

export default App;

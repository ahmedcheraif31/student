import React, { useEffect, useState } from "react";
import Axios from "axios";
import Add from "./Add";
import Studient from "./Studient";

var App = () => {
  const [studient, setStudient] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/Studient").then((res) => {
      setStudient(res.data);
      console.log(studient);
    });
  }, []);
  return (
    <div>
      <h1> welcome</h1>
      <studient studient={studient} />
      <Add />
    </div>
  );
};

export default App;

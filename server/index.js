const express = require('express');
const path = require('path');
const db =require("../database/index")
const cors =require("cors")
const PORT = 1000;
const app = express();
app.use(cors())
app.use(express.json())


app.get('/home',(req,res)=>{
 res.send("welcome hii")
})
app.get('/studient',(req,res)=>{
   db.query('SELECT * FROM studient', function(err,result){
    if(err){
    console.log(err)}
    res.send(result)
    console.log("getitha")
   })
}
)
app.post('/studient',(req,res)=>{
  db.query(`INSERT INTO studient (name ,age ,description) VALUES ("${req.body.name}","${req.body.age}","${req.body.description}")`,
  (err,result)=>{
    if (err){
      console.log(err);
      res.send(err)
    }else{
      res.send(result)
    }
  })
})

app.delete('/studient/:ids',(req,res)=>{
  console.log(req.params)
  db.query(`DELETE FROM studient WHERE idstudient=${req.params.ids}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send(" deleted me")
      console.log("you deleted me")
    }
  })
})

app.put('/studient/:ids',(req,res)=>{
  db.query(`UPDATE studient SET name ="${req.body.name} ",age ="${req.body.age}",
  description="${req.body.description}",
  age="${req.body.age}" WHERE idstudient=${req.params.ids}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("updated ")
    }
  })
})
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${1000}!`);
});

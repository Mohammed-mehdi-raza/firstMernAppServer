const express=require('express'); 
const app=express(); 
const cors=require('cors');
const route=require('../routes/route.js');
const port=process.env.PORT||5000;
require('./db/conn.js');

app.use(cors());
app.use(express.json());

app.use('/',route);

app.get('*',(req,res)=>{
  res.send("route does not exist");
})

app.listen(port,()=>{
  console.log(`server running on port ${port}`);
})
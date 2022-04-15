const mongoose=require('mongoose');
require('dotenv').config();
const URI=process.env['MONGO_URI'];
mongoose.connect (URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("connection to database successful");
}).catch((e)=>{
  console.log(`connection unsuccessful due to error${e}`);
  console.log(URI);
})
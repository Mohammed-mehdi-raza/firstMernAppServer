const mongoose=require('mongoose');
const schema=new mongoose.Schema({
  person_name:{
    type:String,
    required:true
  },
  person_position:{
    type:String,
    required:true
  },
  person_level:{
    type:String,
    required:true
  }
}); 

const user=mongoose.model('users',schema);
module.exports=user;
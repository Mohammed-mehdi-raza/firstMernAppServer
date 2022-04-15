const users=require('../models/user.js');

const index=(req,res)=>{
  res.send('welcome');
}

const add=async(req,res)=>{
  const user=new users({
    person_name:req.body.name,
    person_position:req.body.position,
    person_level:req.body.level
  }); 
  await user.save(); 
  res.redirect('http://localhost:5000/')
}

const show=async(req,res)=>{
  const records=await users.find(); 
  if(records){
    res.json(records); 
  }
  else{
    console.log('no records found');
  }
} 

const del=async(req,res)=>{
  const id =req.body._id;
  await users.deleteOne({_id:id}); 
  res.json({sucess:true});
}

const edit=async(req,res)=>{
  const id=req.params.id; 
  const us=await users.findOne({_id:id});
  res.json(us);
}  

const update=async(req,res)=>{
  const id=req.params.id; 
  await users.updateOne({_id:id},{
    person_name:req.body.name,
    person_position:req.body.position,
    person_level:req.body.level
  });
  res.redirect('http://localhost:5000');
}

module.exports={index,add,show,del,edit,update};
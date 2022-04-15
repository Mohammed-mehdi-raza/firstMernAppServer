const express=require('express');
const router=express.Router();
const {index,add,show,del,edit,update}=require('../controllers/controller.js');

router.get('/',index);

router.post('/record/add',add);

router.get('/record/',show); 

router.post('/delete',del); 

router.get('/edit/:id',edit); 

router.put('/record/:id',update);

module.exports=router;
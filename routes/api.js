var express = require('express');
var router = express.Router();
const User = require("../model/userModel");

// Reg Code....
router.post("/facebook",function(req,res){
     console.log(req.body)
     const {fname,lname,email,password,newpassword,birthday} = req.body;
     const userData = User({
          fname,lname,email,password,newpassword,birthday
     })
     userData.save((err,data)=>{
          if(err){
               return res.status(201).json({msg:"Something went wrong"});
          }
          if(data){
               return res.status(200).json(data);
          }
     })
})

// Login COde....

router.post("/login",function(req,res){
     
     const {email,password} = req.body;
     User.findOne({$and:[{email:email},{password:password}]},(err,data)=>{
          if(err){
               return res.status(201).json({msg:"Something went wrong"});
          }
          if(data){
               return res.status(200).json(data);
          }else{
               return res.status(201).json({msg:"Not found"});
          }
     })
})

module.exports = router;
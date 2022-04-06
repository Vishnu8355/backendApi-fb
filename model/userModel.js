const mongoose= require("mongoose");
const userSchema=mongoose.Schema({

	fname:{
		type:String
	},
	lname:{
		type:String
	},
	email:{
		type:String
	},
	password:{
		type:String
	},
	newpassword:{
		type:String
	},
	
	birthday:{
		type:String
	},
	gender:{
		type:String
	}
})

module.exports=mongoose.model("user",userSchema);

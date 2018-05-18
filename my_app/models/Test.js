//let mongoose = require('mongoose');

 import mongoose from 'mongoose';

let  usersSchema   = new mongoose.Schema({
	username:{
		type:String,
		required: true,
		unique: true,
		validate: /^[a-zA-Z0-9]*[0-9]+[a-zA-Z0-9]*/
		// validate: usernameValidator
        
	}, 
	email:{
		type:String,
		requied: true,
		unique: true,
		validate: /^[a-zA-Z0-9]*[@][a-zA-Z]*[.][a-zA-Z]*/

	},    
	name: {
		type:String,
		requied: true,
      
	},
	password: {
		type:String,
		requied: true,
      
	},
	role: {
		type:String,
		requied: true,
       
	},
	admin: Boolean
});


const Users = mongoose.model('users', usersSchema);
 export default Users;
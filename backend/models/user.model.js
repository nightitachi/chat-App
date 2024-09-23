import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    typr:String,
    required:true,
    minlength:6
  },
  confirmPassword:{
    type:true,
    required:true
  },
  gender:{
    type:true,
    required:true,
    enum:["male" , "female"]
  }
})
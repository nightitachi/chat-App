import React, { useState } from 'react'
import toast from 'react-hot-toast'
const useSignup = () => {
  const [loading , setLoading] = useState(false)
  const signup= async({fullName , username , password , confirmPassword , gender})=>{
    const success = handleInputErrors({fullName, username , password , confirmPassword , gender});
    if(!success) return; 
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" }, 
        body:JSON.stringify({fullName , username , password , confirmPassword , gender})
      })
      const data = await res.json()
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user" , JSON.stringify(data))
    } catch (error) {
      toast.error(error.message)
    }
  }
  return {loading , signup}
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Something is missing! Please fill out all the fields.");
    return false;
  }
  if (confirmPassword !== password) {
    toast.error("Passwords do not match. Please confirm your password.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be more than 6 characters.");
    return false;
  }
  return true;
}
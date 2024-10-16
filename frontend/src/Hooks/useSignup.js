import React, { useState } from 'react'
import toast from 'react-hot-toast'
const useSignup = () => {
  const [loading , setLoading] = useState(false)
  const signup= async({fullName , username , password , confirmPassword , gender})=>{
    const success = handleInputErrors({fullName, username , password , confirmPassword , gender});
    if(!success) return; 
    setLoading(true);
    try {
      const res= await fetch('http://localhost:3001/api/auth/signup' , {
        method:"POST", 
        headers:{"content-type" :"application/json"}, 
        body:JSON.stringify({fullName , username , password , confirmPassword , gender})
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return {loading , signup}
}

export default useSignup

function handleInputErrors({fullName , username , password , confirmPassword , gender}){
  if(!fullName || !username || !password || !confirmPassword || !gender){
    toast.error("somethin is missing  !  you should full the task .")
    return false

  }
  if(confirmPassword !== password){
    toast.error("please valid the confirmed password ! ")
    return false
  }
  if(password.length <6){
    toast.error("password should more than 6 chatacters")
    return false
  }
  return true
}
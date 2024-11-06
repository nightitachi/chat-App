import jwt from 'jsonwebtoken'

const genrateTokenandSetcookies=(userId , res)=>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn:'15d'
  })
  res.cookie("jwt" , token,{
    maxAge:15 * 24 *60 *60 *1000,
    httpOnly: true, //prevent xxs attacks, cross-site scripting attacks
    sameSite:"strict", //prevent attacks CSRF 
    secure: process.env.NODE_ENV  !== "developement", 
  })
}
export default genrateTokenandSetcookies;
export const signup = (req, res) => {
  try {
    const{fullName , username , password , confirmPassword , gender} = req.body ; 

  } catch (error) {
    console.log({mesage: 'You have an Error '});
    
  }  
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};

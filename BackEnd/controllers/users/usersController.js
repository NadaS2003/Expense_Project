const User = require("../../models/User");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../middleware/generateToken");
// will create instance of model

//Register
const registerUser = expressAsyncHandler(async(req,res)=>{
  //optional chaining
    const {name,username,email,password} = req?.body;

    // check if user is already registered
    const userExiste = await User.findOne({email });
    const userExistu = await User.findOne({username });

    if(userExiste || userExistu ) throw new Error("User already exists");
    try{
    // create new user
    const user = await User.create({name,username,email,password});   
    res.status(200).json(user);

   }catch(error){
      res.json(error);
   }
  } );

  //fetch all user

  const fetchUsersControllers = expressAsyncHandler( async(req,res) =>{
    try{
      const users = await User.find({});
      res.json(users);
    }catch(error){
      res.json(error);
    }
  });

  //login user
  const loginUserControllers = expressAsyncHandler( async(req,res) =>{
    const {email,password} = req?.body;
    
    // find the user in database
       const userFound = await User.findOne({email});
    // check if user password is match
        if(userFound && ( await userFound?.isPasswordMatch(password))){
          res.json({
            _id : userFound?._id,
            name : userFound?.name,
            email : userFound?.email,
            username : userFound?.username,
            token : generateToken(userFound?._id),
          });
        }else{
            res.status(401);
            throw new Error("Invalid login credentials");
        }
        
  });

module.exports = {registerUser,fetchUsersControllers,loginUserControllers};

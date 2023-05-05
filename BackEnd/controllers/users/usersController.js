const User = require("../../models/User");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../middleware/generateToken");
// will create instance of model

//Register
const registerUser = expressAsyncHandler(async(req,res)=>{
  //optional chaining
    const {name,email,password,phone_number} = req?.body;

    // check if user is already registered
    const userExists = await User.findOne({email});

    if(userExists) throw new Error("User already exists");
    try{
    // create new user
    const user = await User.create({name,email,password,phone_number});   
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
            phone_number : userFound?.phone_number,
            token : generateToken(userFound?._id),

          });
        }else{
            res.status(401);
            throw new Error("Invalid login credentials");
        }
        
  });

module.exports = {registerUser,fetchUsersControllers,loginUserControllers};
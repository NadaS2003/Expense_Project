const expressAsyncHandler = require("express-async-handler");
const jwt =require("jsonwebtoken");
const User = require("../models/User");


const authMiddleware = expressAsyncHandler( async(req , res , next) =>{
   let token ;
   //console.log("TOKEN");

   if(req?.headers?.authorization.startsWith('Bearer')){   // req $$ reg.headers?.authorization
     token= req?.headers?.authorization?.split(' ')[1];
     console.log("TOKEN" , token);
     try {
        if(token){
            const decodeedUser = jwt.verify(token , process.env.JWT_KEY);
         //   console.log(decodeedUser);
         //find the user 
    const user = await User.findById(decodeedUser?.id );  
      console.log(user);    
         // attach the user the req object 
         req.user=user;
            next();
        }
     } catch (error) {
        throw new Error("Not Authorized token expired");
        
     }

   }else{
   throw new Error("There is no token attached to the header");
   }
});



module.exports = authMiddleware;
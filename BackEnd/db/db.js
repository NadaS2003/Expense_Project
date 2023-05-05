const mongoose = require( 'mongoose');

const dbconnect = async()=>{
    try{
        await  mongoose.connect(process.env.MONGO_URL
        ,{
            useUnifiedTopology : true,
            useNewUrlParser : true,
            autoIndex : true

        });
        console.log(`DB connection successfully`);
    }catch(error){
        console.log(`Error ${error.massage}`);
    }
}

module.exports = dbconnect;


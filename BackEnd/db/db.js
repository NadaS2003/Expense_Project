const { MongoClient } = require( 'mongodb');


const uri = "mongodb+srv://Nada_Salama:jTUYXRpx1OMvrn7a@cluster1.fcl8exx.mongodb.net/test"
const client = new MongoClient(uri);

async function main(){
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }


  }

  async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("Expense").collection("users").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
 async function register(client,name,email,password,phonenum){
   const result =  await  client.db("Expense").collection("users").insertOne({ name : `${name}`, email : `${email}`, password : `${password}`, phonenum : `${phonenum}`});
   
   if (result) {
        console.log("successfully added");
        //console.log(result);
   } else {
        console.log("error")
   }
   client.db.close();
}
async function insertIncome(client,income){
  const result =  await client.db("Expense").collection("users").findAndModify({ name : "afnan" },
   { $set: { "income" : ` ${income}` } });
  if (result) {
        console.log("successfully added");
        //console.log(result);
   } else {
        console.log("error")
   }
  // client.db.close();
}
//register(client,"afnan","fjldjlsjl@gmail.com","55gdfg",8965472);
insertIncome(client,5000);
// findOneListingByName(client,"Nada");
// main().catch(console.error);



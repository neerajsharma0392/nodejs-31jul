const MongoClient =require('mongodb').MongoClient;


async function connectToMonogDatabase(){
const client= await MongoClient.connect("mongodb://127.0.0.1:27017/")
return client;
}

module.exports=connectToMonogDatabase;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017"
const database = "restaurant"
const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology:true})
async function dynamicProduct({name,price,description})
{
    try{
        let result = await client.connect();
        console.log("Connected to the Mongodb")
        const db = result.db(database)
        const collection = db.collection('menucard')
        const newitem = {name,price,description};
        const insert = await collection.insertOne(newitem);
        console.log("item inserted");
    }
    catch(err)
	{
		console.error('Error:',err);
	}
	finally
	{
		await client.close();
	}
}
module.exports = dynamicProduct;
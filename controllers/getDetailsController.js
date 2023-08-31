const MongoClient = require('mongodb').MongoClient;
async function getProductDetails()
{
	const url = 'mongodb://127.0.0.1:27107';
	const dbName = 'restaurant';
	const client = new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology:true});
	try
	{
		await client.connect();
		console.log('Connected to database');
		const db = client.db(dbName);
		const collection = db.collection('menucard');

		//Retrieve Elements
		const product = await collection.find({}).toArray();
		console.log('Products are:',product);
	}
	catch(err)
	{
		console.error('Error',err);
	}
	finally
	{
		await client.close();
	}
}
module.exports= getProductDetails;
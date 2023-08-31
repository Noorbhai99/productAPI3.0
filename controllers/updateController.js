const MongoClient =require('mongodb').MongoClient;
async function updateProduct()
{
	const url='mongodb://127.0.0.1:27017';
	const dbName='restaurant';
	const client=new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology:true});
	try
	{
		await client.connect();
		console.log('Connected to database');
		const db=client.db(dbName);
		const collection=db.collection('menucard');

		//Update Elements
		const filter={name:'pasta'};
		const update={price:80};
		const result=collection.updateOne(filter,update);
		console.log('Price Updated:',result.modifiedCount);
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
module.exports= updateProduct;
const MongoClient=require('mongodb').MongoClient;
async function deleteProduct()
{
	const url='mongodb://127.0.0.1:27017';
	const dbName='restaurant';
	const client= new MongClient(url,{useNewUrlParser:true,useUnifiedTopology:true});
	try
	{
		await client.connect();
		console.log('Connected to database');
		const db=client.db(dbName);
		const collection=db.collection('menucard');

		//Delete Element
		const product={name:'pasta'};
		const result=collection.deleteOne(product);
		console.log('Product deleted:',result.deletedCount);
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

module.exports=deleteProduct;
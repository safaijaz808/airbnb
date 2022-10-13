const MongoClient  = require ("mongodb").MongoClient;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://safa3272:Ribosomes3272!@cluster0.paykpbc.mongodb.net/sample_airbnb";
const client = new MongoClient(uri);

//here we are reading a document from a sample database that we have loaded into our cluster
async function writeData() {
  try {

    const database = client.db("sample_airbnb");
    const collection = database.collection("listingsAndReviews");

    const doc = { _id: 3457,
        "id":"10006546",
        "listing_url":"https://www.airbnb.com/10006546",
        "name":"Charming Duplex",
        "summary":"three bedrooms, located in the area",
        "space":"Privileged views of the Douro River and Ribeira square",
        "room_type":"Entire home/apt",
        "bed_type":"Real Bed",
        "minimum_nights":"1",
        "cancellation_policy":"moderate",
        "last_scraped":"2019-02-16T05:00:00.000+00:00",
        "calendar_last_scraped":"2019-02-16T05:00:00.000+00:00",
        "first_review":"2016-01-03T05:00:00.000+00:00",
        "last_review":"2019-01-20T05:00:00.000+00:00",
        "accommodates":8,
        "bedrooms":3,
        "beds":5
    };
    const result = await collection.insertOne(doc);
    console.log(
   `A document was inserted with the _id: ${result.insertedId}`,
);
  }

  finally{
    await client.close();
  }
}
writeData().catch(console.dir);
const MongoClient  = require ('mongodb').MongoClient;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://safa3272:Ribosomes3272!@cluster0.paykpbc.mongodb.net/sample_analytics-";
const client = new MongoClient(uri);
async function readData() {
  try {
    const database = client.db("sample_airbnb");
    const movies = database.collection("listingsAndReviews");
    // query for movies that have a runtime less than 15 minutes
    const query = { beds: { $lt: 5} }; //this is the condition less than or greater than
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { _id : 1},
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, beds: 1, name: 1 }
    };
    const cursor = movies.find(query, options);
    // print a message if no documents were found
    if ((await cursor.countDocuments) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
readData().catch(console.dir);
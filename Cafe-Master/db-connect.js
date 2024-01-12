const { MongoClient } = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://localhost:27017";


    const client = new MongoClient(uri);

    // Excption
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const db = client.db('cofemaster')

        const collection = db.collection('pemesanan');

        collection.insertOne(
            {"item" : "abc", "price" : 10, "quantity" : 2, "date" : new Date("2014-03-01T08:00:00Z") },
        );

        // Make the appropriate DB calls
        // await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);
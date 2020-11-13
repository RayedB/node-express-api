const database = {}


database.connect = async () => {
    /**
 * Import MongoClient & connexion à la DB
 */
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://rayedbenbrahim:7P7TG-N_4sHJuvdZKz2U@1a997ca2-b261-4284-b9b4-3a5e69005551.practicalprogramming-1555.mongo.dbs.scalingo.com:33781/practicalprogramming-1555?replicaSet=practicalprogramming-1555-rs0&ssl=true';
    let client = await MongoClient.connect(url,{ useNewUrlParser: true });
    console.log(client)
    let db = client.db('parkingApi');
    database.db = db
}

module.exports = database
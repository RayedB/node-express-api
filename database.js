const database = {}


database.connect = async () => {
    /**
 * Import MongoClient & connexion à la DB
 */
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://mongo:27017/parkingApi';
    let client = await MongoClient.connect(url,{ useNewUrlParser: true });
    let db = client.db('parkingApi');
    database.db = db



}

module.exports = database
const connection = require('../database')
const parking = {}

parking.getParkings = async function () {
    return await connection.db.collection('parkings').find({}).toArray()
}
parking.getParking = async function (id) {
    return await connection.db.collection('parkings').find({id}).toArray()
}
parking.create = async function (data) {
    return await connection.db.collection('parkings').insertOne(data)
}

module.exports = parking
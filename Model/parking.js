const connection = require('../database')
const parking = {}

parking.list = async function () {
    return await connection.db.collection('parkings').find({}).toArray()
}
parking.getOne = async function (id) {
    return await connection.db.collection('parkings').find({id}).toArray()
}
parking.create = async function (data) {
    return await connection.db.collection('parkings').insertOne(data)
}
parking.edit = async function (id, data) {
    return await connection.db.collection('parkings').replaceOne({id}, data)
}
parking.replace = async function (id, data) {
    return await connection.db.collection('parkings').updateOne({id}, {$set: data})
}
parking.destroy = async function (id) {
    return await connection.db.collection('parkings').deleteOne({id})
}
module.exports = parking
const express = require('express')
const app = express()
const parkings = require('./parkings.json')

/**
 * Import MongoClient & connexion à la DB
 */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'parkingApi';
let db
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


app.use(express.json())

app.get('/parkings', async (req,res) => {
    try {
        const docs = await db.collection('parkings').find({}).toArray()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.get('/parkings/:id', async (req,res) => {
    const id = parseInt(req.params.id)
    try {
        const docs = await db.collection('parkings').findOne({id})
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.post('/parkings', async (req,res) => {
    try {
        const parkingData = req.body
        const parking = await db.collection('parkings').insertOne(parkingData)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
    
})
app.put('/parkings/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        const parking = await db.collection('parkings').replaceOne({id},replacementParking)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.patch('/parkings/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        const parking = await db.collection('parkings').updateOne({id}, {$set: replacementParking}, {upsert:true})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
})

app.delete('/parkings/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const parking = await db.collection('parkings').deleteOne({id})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
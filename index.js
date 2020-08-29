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
        const docs = await db.collection('parkings').find({id}).toArray()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})
app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
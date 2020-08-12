const express = require('express')
const app = express()
const parkings = require('./parkings.json')

app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
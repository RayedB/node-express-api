const parking = require('../Model/parking')
const parkingController = {}

parkingController.getParkings = async (req,res)=> {
    try {
        const docs = await parking.getParkings()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingController.getParking = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await parking.getParking(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingController.createParking = async (req,res)=> {
    try {
        const parkingData = req.body
        const createdParking = parking.create(parkingData)
        res.status(200).json(createdParking)
    } catch (err) {
        console.log(err)
        throw err
    }
}



parkingController.replaceParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        const parking = await db.collection('parkings').replaceOne({id},replacementParking)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingController.updateParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        const parking = await db.collection('parkings').updateOne({id}, {$set: replacementParking}, {upsert:true})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
parkingController.removeParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const parking = await db.collection('parkings').deleteOne({id})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
}



module.exports = parkingController

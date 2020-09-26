const parking = require('../Model/parking')
const parkingController = {}

parkingController.getParkings = async (req,res)=> {
    try {
        const docs = await parking.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingController.getParking = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await parking.getOne(id)
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

parkingController.updateParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        const modifiedParking = await parking.replace(id, replacementParking)
        res.status(200).json(modifiedParking)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingController.replaceParking = async (req,res)=> {
    try {
        const replacementParking = req.body
        const id = parseInt(req.params.id)
        const updatedParking = await parking.edit(id, replacementParking)
        res.status(200).json(updatedParking)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
parkingController.removeParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await parking.destroy(id)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
}



module.exports = parkingController


const express = require('express')
const parkingController = require('./Controller/parkingController')
const router = express.Router()

router.get('/parkings', parkingController.getParkings)
router.get('/parkings/:id', parkingController.getParking)
router.post('/parkings', parkingController.createParking)
router.put('/parkings/:id', parkingController.replaceParking)
router.patch('/parkings/:id', parkingController.updateParking)
router.delete('/parkings/:id',parkingController.removeParking)

module.exports = router
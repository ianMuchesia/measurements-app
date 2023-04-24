const express = require('express')
const { getAllMeasurements, getSingleMeasurement, deleteMeasurement, updateMeasurements, createMeasurements } = require('../controllers/measurements')

const router = express.Router()


router.get('/' , getAllMeasurements)

router.post('/:id' , createMeasurements)
router.patch('/:id' , updateMeasurements)
router.delete('/:id' , deleteMeasurement)
router.get('/:id' , getSingleMeasurement)


module.exports = router

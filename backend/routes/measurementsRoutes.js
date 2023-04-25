const express = require('express')
const { getAllMeasurements, getSingleMeasurement, deleteMeasurement, updateMeasurements, createMeasurements } = require('../controllers/measurements')
const authenticateUser = require('../middleware/authentication')


const router = express.Router()


router.get('/' ,authenticateUser, getAllMeasurements)

router.post('/' ,authenticateUser, createMeasurements)
router.patch('/:id' ,authenticateUser, updateMeasurements)
router.delete('/:id' ,authenticateUser,  deleteMeasurement)
router.get('/:id' ,authenticateUser,  getSingleMeasurement)


module.exports = router

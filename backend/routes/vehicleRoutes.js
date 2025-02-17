const express = require('express');
const { getAllVehicles, addVehicle, updateVehicle, deleteVehicle } = require('../controllers/vehicleController');
const router = express.Router();

router.get('/', getAllVehicles);
router.post('/', addVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;
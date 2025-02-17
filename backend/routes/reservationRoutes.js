const express = require('express');
const { createReservation, getAllReservations, updateReservationStatus } = require('../controllers/reservationController');
const router = express.Router();

router.post('/', createReservation);
router.get('/', getAllReservations);
router.put('/:id', updateReservationStatus);

module.exports = router;
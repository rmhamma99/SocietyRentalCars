const Reservation = require('../models/Reservation');
const Vehicle = require('../models/Vehicle');

// Create a new reservation
const createReservation = async (req, res) => {
  const { user, vehicle, startDate, endDate } = req.body;
  try {
    const selectedVehicle = await Vehicle.findById(vehicle);
    if (!selectedVehicle || !selectedVehicle.isAvailable) {
      return res.status(400).json({ error: 'Vehicle not available' });
    }

    const totalDays = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const totalCost = totalDays * selectedVehicle.dailyRate;

    const reservation = await Reservation.create({ user, vehicle, startDate, endDate, totalCost });
    res.status(201).json({ message: 'Reservation created successfully', reservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user vehicle');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update reservation status
const updateReservationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const reservation = await Reservation.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: 'Reservation status updated successfully', reservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReservation, getAllReservations, updateReservationStatus };
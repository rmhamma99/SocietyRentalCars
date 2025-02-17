const Vehicle = require('../models/Vehicle');

// Get all vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new vehicle
const addVehicle = async (req, res) => {
  const { make, model, year, dailyRate, image } = req.body;
  try {
    const vehicle = await Vehicle.create({ make, model, year, dailyRate, image });
    res.status(201).json({ message: 'Vehicle added successfully', vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a vehicle
const updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { make, model, year, dailyRate, image, isAvailable, maintenanceDue } = req.body;
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      id,
      { make, model, year, dailyRate, image, isAvailable, maintenanceDue },
      { new: true }
    );
    res.status(200).json({ message: 'Vehicle updated successfully', vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a vehicle
const deleteVehicle = async (req, res) => {
  const { id } = req.params;
  try {
    await Vehicle.findByIdAndDelete(id);
    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllVehicles, addVehicle, updateVehicle, deleteVehicle };
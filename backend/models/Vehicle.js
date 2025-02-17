const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  dailyRate: { type: Number, required: true },
  image: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  maintenanceDue: { type: Date, default: null },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
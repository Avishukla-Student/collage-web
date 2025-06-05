const mongoose = require("mongoose");

const tcApplicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
    rollNo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TCApplication", tcApplicationSchema);

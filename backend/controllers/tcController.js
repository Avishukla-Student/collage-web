const TCApplication = require("../models/tcApplication");

exports.createTC = async (req, res) => {
  try {
    const { studentName, rollNo } = req.body;
    const newTC = new TCApplication({ studentName, rollNo });
    await newTC.save();
    res.status(201).json({ message: "TC application submitted!", tc: newTC });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error submitting TC application",
        error: error.message,
      });
  }
};

exports.getTCs = async (req, res) => {
  try {
    const tcs = await TCApplication.find();
    res.status(200).json(tcs);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving TC applications",
        error: error.message,
      });
  }
};

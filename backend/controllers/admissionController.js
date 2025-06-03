const Admission = require("../models/admission");

exports.createAdmission = async (req, res) => {
  try {
    const admissionData = req.body;
    const newAdmission = new Admission(admissionData);
    await newAdmission.save();
    res
      .status(201)
      .json({
        message: "Admission application submitted successfully!",
        admission: newAdmission,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error submitting admission application",
        error: error.message,
      });
  }
};

exports.getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving admissions", error: error.message });
  }
};

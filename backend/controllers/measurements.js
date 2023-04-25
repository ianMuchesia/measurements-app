const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const Measurement = require("../models/Measurement");




const createMeasurements = async (req, res) => {
  req.body.user = req.user.userId;

  const {
    radius,
    volume,
    title,
    coneHeight,
    cylinderHeight,
    numberOfCylinders,
    surfaceArea,
  } = req.body;

  if (
    !radius ||
    !volume ||
    !title ||
    !coneHeight ||
    !cylinderHeight ||
    !numberOfCylinders ||
    !surfaceArea
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const measurement = await Measurement.create(req.body);

  res.status(StatusCodes.CREATED).json({ success: true, measurement });
};





const getAllMeasurements = async (req, res) => {
  const { userId } = req.user;
  const measurements = await Measurement.find({ user: userId });

  res
    .status(StatusCodes.ACCEPTED)
    .json({ success: true, measurements, nbHits: measurements.length });
};





const getSingleMeasurement = async (req, res) => {
  const { userId } = req.user;
  const { id: measurementID } = req.params;
  const measurement = await Measurement.findOne({
    user: userId,
    _id: measurementID,
  });
  if (!measurement) {
    throw new NotFoundError(`measurement with id:${measurementID} not found`);
  }

  res.status(StatusCodes.ACCEPTED).json({ success: true, measurement });
};






const deleteMeasurement = async (req, res) => {
  const { id: measurementID } = req.params;

  const measurement = await Measurement.findOneAndRemove({
    _id: measurementID,
  });

  if (!measurement) {
    throw new NotFoundError(`measurement with id:${measurementID} not found`);
  }

  res.status(StatusCodes.ACCEPTED).json({ success: true });
};






const updateMeasurements = async (req, res) => {
  req.body.user = req.user.userId;

  const { id: measurementID } = req.params;
  const {
    radius,
    volume,
    title,
    coneHeight,
    cylinderHeight,
    numberOfCylinders,
    surfaceArea,
  } = req.body;

  if (
    !radius ||
    !volume ||
    !title ||
    !coneHeight ||
    !cylinderHeight ||
    !numberOfCylinders ||
    !surfaceArea
  ) {
    throw new BadRequestError("Please provide all values");
  }
  const measurement = await Measurement.findByIdAndUpdate(
    { _id: measurementID },
    req.body,
    { new: true, runValidators: true }
  );

  if (!measurement) {
    throw new NotFoundError(`measurement with id:${measurementID} not found`);
  }

  res.status(StatusCodes.CREATED).json({
    success: true,
    measurement,
  });
};




module.exports = {
  getAllMeasurements,
  getSingleMeasurement,
  createMeasurements,
  deleteMeasurement,
  updateMeasurements,
};

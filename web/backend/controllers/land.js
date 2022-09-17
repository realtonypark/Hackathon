import Land from "../models/Land.js";

export const createLand = async (req, res) => {
  const newLand = new Land(req.body);
  const landSaved = await newLand.save();
  res.status(201).json(landSaved);
};

export const getLands = async (req, res) => {
  const type = req.query.type;
  const location = req.query.location;
  var minPrice;
  var maxPrice;
  if (req.query.price === "over") {
    minPrice = 5000;
    maxPrice = 1000000;
  } else {
    minPrice = parseInt(req.query.price) - 1000;
    maxPrice = parseInt(req.query.price);
  }

  var maxPeriod;
  var minPeriod;

  if (req.query.period === "over") {
    maxPeriod = 1000;
  } else if (req.query.period == "24") {
    maxPeriod = 24;
    minPeriod = 12;
  } else {
    maxPeriod = parseInt(req.query.period);
    minPeriod = parseInt(req.query.period) - 6;
  }
  var minArea;
  var maxArea;
  if (req.query.price === "over") {
    minArea = 100;
    maxArea = 1000000;
  } else if (req.query.area === "1") {
    minArea = 0;
    maxArea = 1;
  } else if (req.query.area === "10") {
    minArea = 1;
    maxArea = 10;
  } else if (req.query.area === "30") {
    minArea = 10;
    maxArea = 30;
  } else if (req.query.area === "50") {
    minArea = 30;
    maxArea = 50;
  } else {
    minArea = 50;
    maxArea = 100;
  }

  const lands = await Land.find().where('type').equals(type).where('location').equals(location).where('price').gte(minPrice).lte(maxPrice).where('period').gte(minPeriod).lte(maxPeriod).where('area').gte(minArea).lte(maxArea);
  res.json(lands);
};

export const getLandById = async (req, res) => {
  const land = await Land.findById(req.params.landId);
  res.status(200).json(land);
};

export const updateLandById = async (req, res) => {
  const updatedLand = await Land.findByIdAndUpdate(
    req.params.landId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedLand);
};

export const deleteLandById = async (req, res) => {
  await Land.findByIdAndDelete(req.params.landId);
  res.status(204).json();
};

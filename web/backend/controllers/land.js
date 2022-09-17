import Land from '../models/Land.js';

export const createLand = async (req, res) => {
    const newLand = new Land(req.body);
    const landSaved = await newLand.save();
    res.status(201).json(landSaved);
}

export const getLands = async (req, res) => {
    const lands = await Land.find();
    res.json(lands);
}

export const getLandById = async (req, res) => {
    const land = await Land.findById(req.params.landId);
    res.status(200).json(land);
}

export const updateLandById = async (req, res) => {
    const updatedLand = await Land.findByIdAndUpdate(req.params.landId, req.body, {
        new: true
    });
    res.status(200).json(updatedLand);
}

export const deleteLandById = async (req, res) => {
    await Land.findByIdAndDelete(req.params.landId);
    res.status(204).json();
}
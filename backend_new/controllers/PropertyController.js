import Property from "../models/Property.js";

export const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({ sellerId: req.params.sellerId });
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!property)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json({ message: "Property deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



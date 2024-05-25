import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    place: { type: String, required: true },
    area: { type: String, required: true },
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    price: { type: String, required: true },
    nearbyHospitals: { type: [String] },
    nearbyColleges: { type: [String] },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Property = mongoose.model("Property", propertySchema);
export default Property;

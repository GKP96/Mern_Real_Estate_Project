import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../redux/properties/propertySlice";

const AddProperty = () => {
  const { currentUser } = useSelector((state) => state.user);
  const sellerId = currentUser._id;
  const [property, setProperty] = useState({
    title: "",
    description: "",
    place: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    nearbyHospitals: "",
    nearbyColleges: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProperty({ ...property, sellerId }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <div className="w-full max-w-lg">
        <input
          name="title"
          value={property.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="description"
          value={property.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="place"
          value={property.place}
          onChange={handleChange}
          placeholder="Place"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="area"
          value={property.area}
          onChange={handleChange}
          placeholder="Area"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="bedrooms"
          value={property.bedrooms}
          onChange={handleChange}
          placeholder="Bedrooms"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="bathrooms"
          value={property.bathrooms}
          onChange={handleChange}
          placeholder="Bathrooms"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="price"
          value={property.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="nearbyHospitals"
          value={property.nearbyHospitals}
          onChange={handleChange}
          placeholder="Nearby Hospitals"
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <input
          name="nearbyColleges"
          value={property.nearbyColleges}
          onChange={handleChange}
          placeholder="Nearby Colleges"
          className="mb-4 px-4 py-2 border rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default AddProperty;

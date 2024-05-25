import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../utils/common";
import { deleteProperty } from "../redux/properties/propertySlice";
import DataTable from "react-data-table-component";
// import { setUserProperties } from "firebase/analytics";

const PropertyList = () => {
  const dispatch = useDispatch();
  const [properties, setProperties] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const propertiesValues = async () => {
    const res = await axios.get(`${url}/properties/${currentUser._id}`);
    console.log("this is res.data ", res.data);
    setProperties(res.data);
  };
  useEffect(() => {
    propertiesValues();
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteProperty(id));
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Place",
      selector: (row) => row.place,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button onClick={() => handleDelete(row._id)}>Delete</button>
      ),
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={properties} pagination />
    </div>
  );
};

export default PropertyList;

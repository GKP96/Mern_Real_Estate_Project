import { useEffect, useState } from "react";

import axios from "axios";
import { url } from "../utils/common";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
export default function AllPropertyList() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const propertiesValues = async () => {
    const res = await axios.get(`${url}/properties`);
    console.log("this is res.data ", res.data);
    setProperties(res.data);
  };
  useEffect(() => {
    propertiesValues();
  }, []);

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
        <button onClick={() => navigate(`/sellerprofilepage/${row.sellerId}`)}>
          I am interested
        </button>
      ),
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={properties} pagination />
    </div>
  );
}

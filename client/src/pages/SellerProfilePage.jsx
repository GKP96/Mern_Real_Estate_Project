import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../utils/common";
import axios from "axios";
import SellerProfile from "../components/SellerProfile";

export default function SellerProfilePage() {
  const { sellerId } = useParams();
  const [seller, setSeller] = useState({});
  const getSellerData = async () => {
    const res = await axios.get(`${url}/users/${sellerId}`);
    console.log("res data", res.data.data);
    setSeller(res.data.data);
  };
  useEffect(() => {
    getSellerData();
  }, []);
  console.log("this is seller ", seller);
  return (
    <div>
      <SellerProfile seller={seller} />
    </div>
  );
}

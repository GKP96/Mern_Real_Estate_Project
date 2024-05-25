import AddProperty from "../components/AddProperty";

import { useSelector } from "react-redux";
export default function About() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {currentUser && <AddProperty />}
      {!currentUser && <p className=" text-center"> Sign in first</p>}
    </>
  );
}

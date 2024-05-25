import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/UserSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OAuth from "../components/OAuth";
import { url } from "../utils/common";
export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await axios.post(
        `${url}/users/signin`,
        formData
      );
      console.log("this is res.data " , res.data.success);
      if (res.data.success === true) {
        dispatch(signInSuccess(res.data));
        navigate("/");
      } else {
        dispatch(signInFailure(res.messsage));
      }
    } catch (err) {
      dispatch(signInFailure(err.messsage));
    }
  };
  return (
    <div>
      <div className=" text-3xl text-center font-semibold mt-[12vh]">
        Sign In
      </div>
      <form
        className="flex flex-col items-center gap-4 mt-[3vh]"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="email"
          className="w-[50vw] sm:w-[26vw] h-[6vh] rounded-md p-4 bg-white"
          id="email"
          onChange={formChangeHandler}
        />
        <input
          type="password"
          placeholder="password"
          className="w-[50vw] sm:w-[26vw] h-[6vh] rounded-md p-4 bg-white"
          id="password"
          onChange={formChangeHandler}
        />
        <button className=" bg-slate-700 w-[50vw] sm:w-[26vw] h-[6vh] rounded-md">
          <p className="text-white mr-5">
            {loading ? "Loading ..." : "Sign In"}
          </p>
        </button>
        <OAuth />
      </form>
      <div
        className="text text-center flex justify-center gap-2
      "
      >
        Dont have an account ?{" "}
        <Link to="/signup">
          {" "}
          <div className="text-blue-400">Signup</div>
        </Link>
      </div>
      <div className="text-red-500 text-center mt-2">{error}</div>
    </div>
  );
}

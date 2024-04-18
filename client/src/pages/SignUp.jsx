import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(`http://localhost:5050/users`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });
      navigate("/signin");
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      return;
    }
  };
  return (
    <div>
      <div className=" text-3xl text-center font-semibold mt-[12vh]">
        Signup
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center gap-4 mt-[3vh]"
      >
        <input
          type="text"
          placeholder="name"
          className="w-[50vw] sm:w-[26vw] h-[6vh] rounded-md p-4  bg-white"
          onChange={formChangeHandler}
          id="name"
        />
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
        <input
          type="text"
          placeholder="role"
          className="w-[50vw] sm:w-[26vw] h-[6vh] rounded-md p-4 bg-white"
          id="role"
          onChange={formChangeHandler}
        />
        <button className=" bg-slate-700 w-[50vw] sm:w-[26vw] h-[6vh] rounded-md">
          <p className="text-white mr-5" hidden={isLoading}>
            {isLoading ? "Loading .." : "Sign up"}
          </p>
        </button>
      </form>
      <div
        className="text text-center flex justify-center gap-2
      "
      >
        Already have an account ?{" "}
        <Link to="/signin">
          {" "}
          <div className="text-blue-400">SignIn</div>
        </Link>
      </div>
      <div className="text-red-500 text-center mt-2">{error}</div>
    </div>
  );
}

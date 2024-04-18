import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const formChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    try {
      const res = await axios.post("/api/auth/signin", formData);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
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
            {isLoading ? "Loading ..." : "Sign In"}
          </p>
        </button>
        <button className=" bg-red-600 w-[50vw] sm:w-[26vw] h-[6vh] rounded-md">
          <p className="text-white mr-5">
            {isLoading ? "Loading ..." : "CONTINUE WITH GOOGLE"}
          </p>
        </button>
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

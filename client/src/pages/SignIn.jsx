import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <div className=" text-3xl text-center font-semibold mt-[12vh]">
        Sign In
      </div>
      <form className="flex flex-col items-center gap-4 mt-[3vh]">
        <input
          type="text"
          placeholder="email"
          className="w-[50vw] sm:w-[26vw] h-[6vh] rounded-md p-4 bg-white"
        />
        <input
          type="password"
          placeholder="password"
          className="w-[50vw] sm:w-[26vw] h-[6vh] rounded-md p-4 bg-white"
        />
        <button className=" bg-slate-700 w-[50vw] sm:w-[26vw] h-[6vh] rounded-md">
          <p className="text-white mr-5">Sign In</p>
        </button>
        <button className=" bg-red-600 w-[50vw] sm:w-[26vw] h-[6vh] rounded-md">
          <p className="text-white mr-5">CONTINUE WITH GOOGLE</p>
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
    </div>
  );
}

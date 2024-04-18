import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 h-[8vh] shadow-md flex justify-between items-center p-2">
      {" "}
      <Link to="/">
        <div className="name flex justify-center flex-wrap p-1 w-[30vw]">
          <div className="firstname text-slate-400 font-bold text-sm sm:text-xl md:text-2xl">
            Gautam
          </div>
          <div className="firstname text-slate-700 font-bold text-sm sm:text-xl md:text-2xl">
            Estate
          </div>
        </div>
      </Link>
      <div className="search bg-slate-100 h-10 rounded-md w-[30vw]">
        <form className="flex p-2 justify-between  items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-400" />
        </form>
      </div>
      <div className="  menu p-2">
        <ul className="gap-4  w-[30vw] flex justify-center">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/signin">
            <li className="hover:underline mx-2">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 h-12 shadow-md flex justify-between items-center p-2">
      {" "}
      <Link to="/home">
        <div className="name flex flex-wrap p-1">
          <div className="firstname text-slate-400 font-bold text-sm sm:text-lg">
            Gautam
          </div>
          <div className="firstname text-slate-700 font-bold text-sm sm:text-lg">
            Estate
          </div>
        </div>
      </Link>
      <div className="search bg-slate-100 rounded-md w- sm:w-64">
        <form className="flex p-1 justify-between  items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-400" />
        </form>
      </div>
      <div className="menu p-2">
        <ul className="flex gap-4 hover:underline">
          <Link to="/">
            <li className="hidden sm:inline">Home </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline">About</li>
          </Link>
          <Link to="/signin">
            <li>Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

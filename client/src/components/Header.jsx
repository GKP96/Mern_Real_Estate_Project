import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
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
        <ul className=" gap-2 sm:gap-5  w-[30vw] flex justify-center items-center">
          {currentUser?.role === "seller" && (
            <Link to="/">
              <li className="hidden  sm:inline hover:underline">
                Your Property List{" "}
              </li>
            </Link>
          )}
          {currentUser?.role === "seller" && (
            <Link to="/">
              <Link to="/about">
                <li className="hidden sm:inline hover:underline">
                  Add Property
                </li>
              </Link>
            </Link>
          )}

          <Link to="/buyerhome">
            <li className="hidden sm:inline hover:underline">All PropertyList</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="h-[45px] w-[45px] rounded-full border-2 border-white hover:scale-105"
                src={currentUser.avatar}
                alt="Profile "
              />
            ) : (
              <li className="hover:underline mx-2">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

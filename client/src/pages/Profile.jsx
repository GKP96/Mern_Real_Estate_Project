import  { useState, useRef } from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fileRef = useRef(null);
  const {currentUser} = useSelector((state) => state.user);
  const handleUpdate = () => {
    // Logic to handle update button click
  };

  const handleCreateListing = () => {
    // Logic to handle create listing button click
  };

  const handleDeleteAccount = () => {
    // Logic to handle delete account button click
  };

  const handleSignOut = () => {
    // Logic to handle sign out button click
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <p className="text-center  text-3xl my-4">Profile</p>
        <div className="flex justify-center rounded-full my-4">
          <input  ref={fileRef} type="file" accept="image/*" hidden/>
          <img
          onClick={()=> fileRef.current.click()}
          src={currentUser.avatar}
            alt="profile"
            className="w-20 h-20 rounded-full"
          />
        </div>

        <div className="flex flex-col w-[80vw] sm:w-[40vw] md:w-[30vw]">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-2 py-1 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            onClick={handleCreateListing}
          >
            Create Listing
          </button>
        </div>
      </div>
      <div className="flex w-[80vw] sm:w-[40vw] md:w-[30vw] justify-between text-red-700 text-xl">
        <div onClick={handleDeleteAccount}>delete</div>
        <div onClick={handleSignOut}>signout</div>
      </div>
    </div>
  );
};

export default Profile;

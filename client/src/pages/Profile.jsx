import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { app } from "../firebase.js";
const Profile = () => {
  /* const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  */
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
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
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <p className="text-center  text-3xl my-4">Profile</p>
        <div className="flex justify-center rounded-full my-4">
          <input
            ref={fileRef}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
            hidden
          />
          <img
            onClick={() => fileRef.current.click()}
            src={formData.avatar || currentUser.avatar}
            alt="profile"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <p className="text-sm text-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>

        <div className="flex flex-col w-[80vw] sm:w-[40vw] md:w-[30vw]">
          <input
            type="text"
            placeholder="Username"
            defaultValue={currentUser.username}
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={currentUser.email}
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-2 py-1 mb-4"
            value={formData.password}
            onChange={handleChange}
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

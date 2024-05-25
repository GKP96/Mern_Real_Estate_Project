// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
// import { useState, useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   updateUserStart,
//   updateUserSuccess,
//   updateUserFailure,
//   userSignoutStart,
//   userSignoutFailure,
//   userSignoutSuccess,
// } from "../redux/user/UserSlice.js";
// import axios from "axios";
// import { app } from "../firebase.js";
// import { url, header } from "../utils/common.js";
// const Profile = () => {
//   const [filePerc, setFilePerc] = useState(0);
//   const [fileUploadError, setFileUploadError] = useState(false);
//   const fileRef = useRef(null);
//   const [file, setFile] = useState(undefined);
//   const [formData, setFormData] = useState({});
//   const { currentUser } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };
//   const handleUpdate = async () => {
//     console.log(currentUser);
//     console.log("This is formdata" + JSON.stringify(formData));
//     try {
//       dispatch(updateUserStart());
//       const res = await axios.put(
//         `${url}/users/update/${currentUser._id}`,
//         formData,
//         {
//           header,
//         }
//       );
//       if (res.success === true) {
//         dispatch(updateUserSuccess(res.data));
//       } else {
//         dispatch(updateUserFailure(res.data));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // const handleCreateListing = () => {};

//   const handleSignOut = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(userSignoutStart());
//       const res = await axios.get(`${url}/users/signout`);
//       console.log(res);
//       if (res.status === 200) {
//         dispatch(userSignoutSuccess());
//       } else {
//         dispatch(userSignoutFailure(res.data));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const handleFileUpload = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setFilePerc(Math.round(progress));
//       },
//       (error) => {
//         console.log(error);
//         setFileUploadError(true);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
//           setFormData({ ...formData, avatar: downloadURL })
//         );
//       }
//     );
//   };
//   useEffect(() => {
//     if (file) {
//       handleFileUpload(file);
//     }
//   }, [file]);
//   return (
//     <div className="flex flex-col items-center">
//       <div className="mb-4">
//         <p className="text-center  text-3xl my-4">Profile</p>
//         <div className="flex justify-center rounded-full my-4">
//           <input
//             ref={fileRef}
//             onChange={(e) => setFile(e.target.files[0])}
//             type="file"
//             accept="image/*"
//             hidden
//           />
//           <img
//             onClick={() => fileRef.current.click()}
//             src={formData.avatar || currentUser.avatar}
//             alt="profile"
//             className="w-20 h-20 rounded-full"
//             id="image"
//           />
//         </div>
//         <p className="text-sm text-center">
//           {fileUploadError ? (
//             <span className="text-red-700">
//               Error Image upload (image must be less than 2 mb)
//             </span>
//           ) : filePerc > 0 && filePerc < 100 ? (
//             <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
//           ) : filePerc === 100 ? (
//             <span className="text-green-700">Image successfully uploaded!</span>
//           ) : (
//             ""
//           )}
//         </p>
//         <p className=" text-center">update photo</p>
//         <div className="flex flex-col w-[80vw] sm:w-[40vw] md:w-[30vw]">
//           <input
//             type="text"
//             placeholder="Firstname"
//             defaultValue={currentUser.firstname}
//             className="border border-gray-400 rounded px-2 py-1 mb-2"
//             value={formData.firstname}
//             onChange={handleChange}
//             id="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Lastname"
//             defaultValue={currentUser.lastname}
//             className="border border-gray-400 rounded px-2 py-1 mb-2"
//             value={formData.lastname}
//             onChange={handleChange}
//             id="lastname"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             defaultValue={currentUser.email}
//             className="border border-gray-400 rounded px-2 py-1 mb-2"
//             value={formData.email}
//             onChange={handleChange}
//             id="email"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="border border-gray-400 rounded px-2 py-1 mb-4"
//             value={formData.password}
//             onChange={handleChange}
//             id="password"
//           />
//         </div>
//         <div className="flex flex-col">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
//             onClick={handleUpdate}
//           >
//             Update
//           </button>
//           {/* <button
//             className="bg-green-500 text-white px-4 py-2 rounded mb-4"
//             onClick={handleCreateListing}
//           >
//             Create Listing
//           </button> */}
//         </div>
//       </div>
//       <div className="flex w-[80vw] sm:w-[40vw] md:w-[30vw] justify-center hover:underline text-red-700 text-xl">
//         {/* <div onClick={handleDeleteAccount}>delete</div> */}
//         <div onClick={handleSignOut}>signout</div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  userSignoutStart,
  userSignoutFailure,
  userSignoutSuccess,
  uploadFileFailure,
  uploadFileStart,
  uploadFileSuccess,
} from "../redux/user/UserSlice.js";
import axios from "axios";
import { app } from "../firebase.js";
import { url, setHeader } from "../utils/common.js";

const Profile = () => {
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Initialize formData with current user data
  const [formData, setFormData] = useState({
    firstname: !currentUser.firstname ? "" : currentUser.firstname,
    lastname: !currentUser.lastname ? "" : currentUser.lastname,
    email: !currentUser.email ? "" : currentUser.email,
    avatar: !currentUser.avatar ? "" : currentUser.avatar,
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleUpdate = async () => {
    console.log(currentUser);
    try {
      console.log("this is header ", setHeader(currentUser.token));
      dispatch(updateUserStart());
      const res = await axios.put(
        `${url}/users/update/${currentUser._id}`,
        formData,
        {
          headers: setHeader(currentUser.token),
        }
      );
      if (res.data.success) {
        dispatch(updateUserSuccess(res.data));
      } else {
        dispatch(updateUserFailure(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      dispatch(userSignoutStart());
      const res = await axios.get(`${url}/users/signout`);
      console.log(res);
      if (res.status === 200) {
        dispatch(userSignoutSuccess());
      } else {
        dispatch(userSignoutFailure(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileUpload = (file) => {
    dispatch(uploadFileStart());
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
        console.log(error);
        setFileUploadError(true);
        dispatch(uploadFileFailure(error));
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            avatar: downloadURL,
          }));
          dispatch(uploadFileSuccess(downloadURL));
        });
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
            id="image"
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
        <p className="text-center">Update Photo</p>
        <div className="flex flex-col w-[80vw] sm:w-[40vw] md:w-[30vw]">
          <input
            type="text"
            placeholder="Firstname"
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={formData.firstname}
            onChange={handleChange}
            id="firstname"
          />
          <input
            type="text"
            placeholder="Lastname"
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={formData.lastname}
            onChange={handleChange}
            id="lastname"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 rounded px-2 py-1 mb-2"
            value={formData.email}
            onChange={handleChange}
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-2 py-1 mb-4"
            value={formData.password}
            onChange={handleChange}
            id="password"
          />
        </div>
        <div className="flex flex-col">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          {/* <button
            className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            onClick={handleCreateListing}
          >
            Create Listing
          </button> */}
        </div>
      </div>
      <div className="flex w-[80vw] sm:w-[40vw] md:w-[30vw] justify-center hover:underline text-red-700 text-xl cursor-pointer">
        {/* <div onClick={handleDeleteAccount}>delete</div> */}
        <div onClick={handleSignOut}>Sign Out</div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photoURL.value.trim();

    if (!name || !photoURL) {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all fields.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    updateProfile(user, {
      displayName: name,
      photoURL,
    })
      .then(() => {
        Swal.fire({
          title: `Hi, ${name}!`,
          text: "Your information has been updated successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/my-profile");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="flex justify-center py-10 min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
          Update Profile
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleUpdateProfile} className="space-y-4 mt-6">
          <div className="flex items-center gap-4">
            <label className="font-medium text-gray-600 w-20">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              defaultValue={user?.displayName}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="font-medium text-gray-600 w-20">Photo URL:</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              defaultValue={user?.photoURL}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-10 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

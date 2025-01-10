import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const {user}=useContext(AuthContext)
  return (
    <div className="flex justify-center py-10 min-h-screen bg-gray-100">
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
        My Profile
      </h2>
      <div className="divider"></div>
      <div className="w-64 h-36 mx-auto">
        <img className="w-full h-full rounded-[12px]" src={user?.photoURL} alt="User Profile" />
      </div>
      <h3 className="text-center py-3 text-xl text-transparent bg-clip-text bg-gradient-to-r font-semibold from-blue-500 to-green-500">
        Welcome, {user?.displayName}
      </h3>
      <div className="space-y-4 mt-6">
        <div className="flex items-center gap-4">
          <label className="font-medium text-gray-600 w-20">Name:</label>
          <input
            type="text"
            value={user?.displayName}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            readOnly
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="font-medium text-gray-600 w-20">Email:</label>
          <input
            type="email"
            value={user?.email}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            readOnly
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <Link
         to='/update-profile'><button 
          className="px-10 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Update
        </button></Link>
      </div>
    </div>
  </div>
  
  );
};

export default MyProfile;

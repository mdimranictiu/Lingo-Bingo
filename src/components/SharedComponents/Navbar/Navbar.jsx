import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
    const user=true;
  //const {user,logOut}= useContext(AuthContext)
  //console.log(user?.email, user?.displayName)
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
    <Link to="/start-learning">Start-learning</Link>
    </li>
      {user && (
        <>
         
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link to="/my-profile">My Profile</Link>
          </li>
          <li>
            <Link to="/about-us">About-us</Link>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut=()=>{
    logOut()
    .then(()=>{
      console.log('Sign out successfully')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const registerSection = (
    <>
      {user ? (
        <div className="flex items-center max-sm:items-start gap-6 max-sm:flex-col">
          <h2 className="text-white text-lg">Welcome,MD IMRAN SHEIKH</h2>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-blue-500 transition duration-300"
          >
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={handleSignOut}
            className=" text-white rounded transition duration-300"
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex max-sm:flex-col gap-4">
          <button className="px-4 py-2 text-white max-sm:bg-gradient-to-r from-blue-500 to-green-500 hover:bg-white hover:text-[#008575] rounded transition duration-300">
            <Link to="/login" className="px-4 py-2 rounded">
              Login
            </Link>
          </button>
          <button className="px-4 py-2 text-white max-sm:bg-gradient-to-r from-blue-500 to-green-500 hover:bg-white hover:text-[#008575] rounded transition duration-300">
            <Link to="/register" className="px-4 py-2 rounded">
              Register
            </Link>
          </button>
        </div>
      )}
    </>
  )
  return (
    <div className="navbar  bg-gradient-to-r from-blue-500 to-green-500 sticky top-0 left-0  z-50 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className=" text-3xl font-bold  text-[white] lg:hidden"
          >
          <IoIosMenu />
          </div>
        </div>
       <Link to='/'> <a className="btn btn-ghost text-xl">Lingo-Bingo</a></Link>
      </div>
      <div
        className={`fixed top-[64px] left-0 py-10 z-40 w-full  bg-[white] shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute  top-4 right-4 text-2xl"
        >
         <RxCross1/>
        </button>
        <ul className="menu p-3 text-center text-xl">{links}{ <div className="text-xl p-3 md:hidden">{registerSection}</div>}</ul>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">{links}</ul>
      </div>
      <div className="navbar-end max-sm:hidden max-md:hidden text-2xl">{registerSection}</div>
    </div>
  );
};

export default NavBar;

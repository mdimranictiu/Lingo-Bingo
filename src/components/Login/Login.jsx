import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";




const Login = () => {
  document.title="Login"
  const location =useLocation();
  const [em,setem]=useState('');
  console.log(em)
  const destination = location.state || '/';
    const navigate= useNavigate();
    const {loginUser,googleSignIn}=useContext(AuthContext)
    const [eye,setEye]=useState(false)
    console.log(destination)
    const handleLogin=(e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        loginUser(email,password)
        .then((userCredential)=>{
          form.reset()
           navigate(destination)
        })
        .catch((error)=>{
          Swal.fire({
                  icon: "error",
                  title: "Login Failed",
                  text: `${error.message}`,
                  confirmButtonText: 'Try Again',
          
                });
        })
    }
    const googleLogin=()=>{
      googleSignIn()
      .then((data)=>{
        console.log('sign in successfully',data)
        navigate(destination)
      })
      .catch((error)=>{
                Swal.fire({
                  icon: "error",
                  title: "Login Failed",
                  text: `${error.message}`,
                  confirmButtonText: 'Try Again',
          
                });
       })
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6 ">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6 relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email" onChange={(e) =>{
                e.preventDefault();
                setem(e.target.value)
              } }
              placeholder="Email" name="email"
              className="w-full pl-10 border-b-2 border-gray-300 outline-none focus:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 py-2"
              required
            />
          </div>

          <div className="mb-6 relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={eye? "text": "password"}
              placeholder="Password" name="password"
              className="w-full pl-10 border-b-2 border-gray-300 outline-none focus:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 py-2"
              required
            />
           {eye ? (
                            <FaEyeSlash
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={() => setEye(false)}
                            />
                        ) : (
                            <FaEye
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={() => setEye(true)}
                            />
                        )}
          </div>
           <div className="flex justify-end mb-6">
            <Link to='/forgot-password' state={{email: em}}><p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Forgotten Password?</p>
            </Link>
           </div>
          <button
            type="submit"
            className="w-full text-xl hover:bg-gradient-to-l transition-colors  bg-gradient-to-r from-blue-500 to-green-500  text-white py-2 rounded-[32px] "
          >
            Login
          </button>
          <div className="divider">OR</div>
          <div className="mb-3 w-32 mx-auto py-3 flex justify-center text-3xl cursor-pointer">
          <FcGoogle onClick={googleLogin} title="Login with Google"></FcGoogle>
          </div>
        </form>
        <div className="py-10" >
            <h3 className="text-center">Have not account yet ? <Link className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" to='/register'>Register</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default Login;

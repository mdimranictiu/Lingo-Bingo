import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";






const Register = () => {
    const {createNewuser,googleSignIn} =useContext(AuthContext)
    const [eye,setEye]=useState(false)
    const [Error,setError]=useState("")
    const navigate= useNavigate()

    const validatePassword = (password) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const minLength = 6;
    
        if (!uppercaseRegex.test(password)) {
          return 'Password must contain at least one uppercase letter.';
        }
        if (!lowercaseRegex.test(password)) {
          return 'Password must contain at least one lowercase letter.';
        }
        if (password.length < minLength) {
          return 'Password must be at least 6 characters long.';
        }
        return '';
      };

    const handleRegister=(e)=>{
          e.preventDefault();
          const form= e.target;
          const name= form.name.value;
          const email= form.email.value;
          const photoURL=form.photoURL.value;
          const password= form.password.value;
          const passError=validatePassword(password)
          if(passError){
            setError(passError);
            return;
          }
          setError('')
          const user_info={
            name,email,photoURL,password
          }
          console.log(user_info)
          createNewuser(email,password)
          .then((userCredential)=>{
            const user= userCredential.user;
            form.reset();
            console.log(user)
            updateProfile(user, {
             displayName: name,
             photoURL: photoURL,
         })
         .then(()=>{
           Swal.fire({
             title: `Hi, ${name} `,
             text: "Your Account Created Successfully!",
             icon: "success",
             showConfirmButton: false,
             timer: 1000,
           });
           navigate('/')
         })
        
        
         })
         .catch((error)=>{
           Swal.fire({
             icon: "error",
             title: "Registration Failed",
             text: `${error.message}`,
             confirmButtonText: 'Try Again',
     
           });
         })
     
       }
     
   document.title="Register"
      const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((data)=>{
          const user=data.user;
          console.log(user)
          Swal.fire({
            title: `Hi, ${user.displayName} `,
            text: "Your Account Created Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/');
        })
    
        .catch((error)=>{
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: `${error.message}`,
            confirmButtonText: 'Try Again',
    
          });
        })
      
      }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md  bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6 ">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6 relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Name" name="name"
              className="w-full pl-10 border-b-2 border-gray-300 outline-none focus:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 py-2"
              required
            />
          </div>
          <div className="mb-6 relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email" name="email"
              className="w-full pl-10 border-b-2 border-gray-300 outline-none focus:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 py-2"
              required
            />
          </div>
          <div className="mb-6 relative">
            <FaImage className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Photo Url" name="photoURL"
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
           <div className=" mb-6">
            {<><span className="text-red-700">{Error}</span></>}

           </div>

          <button
            type="submit"
            className="w-full py-3 text-xl hover:bg-gradient-to-l transition-colors  bg-gradient-to-r from-blue-500 to-green-500  text-white  rounded-[32px] "
          >
            Register
          </button>
          <div className="divider">OR</div>
          <div className="mb-3 w-32 mx-auto py-3 flex justify-center text-3xl cursor-pointer">
          <FcGoogle onClick={handleGoogleSignIn} title="Register with Google"></FcGoogle>
          </div>
        </form>
        <div className="py-10" >
            <h3 className="text-center">Already have an account ? <Link className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" to='/login'>Login</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default Register;

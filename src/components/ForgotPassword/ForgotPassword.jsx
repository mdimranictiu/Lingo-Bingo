import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';  // Add this import to use Swal

const ForgotPassword = () => {
    const location = useLocation();
    const [success, setSuccess] = useState('');
    const prevEmail = location?.state?.email || ""; 
    console.log(prevEmail);
    
    const { forgotPassword } = useContext(AuthContext);
    
    const handleforgotPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        console.log(email);
        
        forgotPassword(email)
        .then(() => {
            setSuccess('Reset Email Sent Successfully!');
            setTimeout(() => {
                window.location = 'https://mail.google.com/';
            }, 1000);
            form.reset();
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Failed to send",
                text: `${error.message}`,
                confirmButtonText: 'Try Again',
            });
        });
    };
    
    return (
        <div className="flex justify-center py-10 min-h-96 bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
                    Forgot Password
                </h2>
                <form onSubmit={handleforgotPassword}>
                    <div className="space-y-4 mt-6">
                        <div className="flex items-center gap-4">
                            <input
                                type="email"
                                name="email"
                                defaultValue={prevEmail}
                                required
                                placeholder="Enter Your Email"
                                className="w-full p-3 border text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        {success && (
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>
                                {success}
                            </p>
                        )}
                        <button
                            type='submit'
                            className="w-full p-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

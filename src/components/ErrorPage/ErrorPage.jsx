import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    document.title="Error Page"
    return (
        <div className='flex flex-col  h-screen items-center justify-center'>
            <h2 className='text-4xl py-2 pb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#15389E] via-[#2e6eb6] to-[#4A9CF8]'>{error.statusText || error.message}</h2>
           <Link to="/"><button className='text-transparent font-bold bg-clip-text bg-gradient-to-r text-3xl from-blue-500 to-green-500 '>Home</button>
           </Link>
        </div>
    );
};

export default ErrorPage;
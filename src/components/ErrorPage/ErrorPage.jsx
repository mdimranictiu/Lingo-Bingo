import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex text-4xl h-screen items-center justify-center'>
            <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#15389E] via-[#2e6eb6] to-[#4A9CF8]'>{error.statusText || error.message}</h2>
        </div>
    );
};

export default ErrorPage;
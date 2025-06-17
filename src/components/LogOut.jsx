import React from 'react';
import { signOut } from "firebase/auth";

const LogOut = () => {

    const handleSignOut = () => {
        signOut(auth).then(() => {
            }).catch((error) => {
                navigate('/error');
            });
    };

    return (
        <div className="flex items-center flex-col justify-center min-h-screen">
            <span className="text-xl font-semibold">Are you sure, you want to log out?</span>
            <div className='p-4'>
                <button className='border-2 p-2 rounded-xl hover:bg-red-700 m-2' onClick={handleSignOut}>Sure</button>
                <button className='border-2 p-2 rounded-xl hover:bg-red-700 m-2'>Cancel</button>
            </div>
        </div>
    )
};

export default LogOut;
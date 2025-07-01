import React from 'react';
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { toggleMenuView } from '../utils/menuSlice';
import { auth } from '../utils/firebase';

const LogOut = () => {
    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(toggleMenuView());
    };
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            }).catch((error) => {
                navigate('/error');
            });
    };

    return (
        <div className="overflow-y-scroll hide-scrollbar fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
             style={{ backgroundImage: "url('/src/assets/logout_bg.jpg')" }}>
          <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div>
          <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-gradient-to-r rounded-xl">
            <span className="text-xl text-white font-mono font-bold">Are you sure, you want to log out?</span>
            <div className='p-4'>
              <button className='border-2 py-2 px-4 hover:bg-red-800 mx-4 text-white font-mono' onClick={handleSignOut}>Sure</button>
              <button className='border-2 py-2 px-4 hover:bg-red-800 mx-4 text-white font-mono' onClick={handleMenu}>Cancel</button>
            </div>
          </div>
        </div>
    )
};

export default LogOut;
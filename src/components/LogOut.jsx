import React from 'react';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuView } from '../utils/menuSlice';
import { auth } from '../utils/firebase';
import { toggleSearchView } from '../utils/searchSlice';

const LogOut = () => {
    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(toggleMenuView());
    };

    const searchView = useSelector(store => store.search.searchView);

    const menu = useSelector(store => store.menu.menuView);

    const handleSignOut = () => {
        dispatch(toggleMenuView());
        if(searchView) dispatch(toggleSearchView());

        signOut(auth).then(() => {
            }).catch((error) => {
                navigate('/error');
            });
    };

    return (
      <>
        <div className="overflow-y-scroll hide-scrollbar fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center">
          <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div>
          <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-gradient-to-r rounded-xl">
            <span className="text-xl text-white font-mono font-bold">Are you sure, you want to log out?</span>
            <div className='p-4'>
              <button className='border-2 py-2 px-4 hover:bg-red-800 mx-4 text-white font-mono' onClick={handleSignOut}>Sure</button>
              <button className='border-2 py-2 px-4 hover:bg-red-800 mx-4 text-white font-mono' onClick={handleMenu}>Cancel</button>
            </div>
          </div>
        </div>
      </>
    )
};

export default LogOut;
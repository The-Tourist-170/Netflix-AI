import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';
import { toggleSearchView } from '../utils/searchSlice';
import { toggleMenuView } from '../utils/menuSlice';
import { clearGeminiSlice } from '../utils/geminiSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const searchView = useSelector(store => store.search.searchView);
  const searchBtn = useSelector(store => store.menu.searchBtn);

  const handleSearch = () => {
    dispatch(toggleSearchView());
  };

  if(!searchView) dispatch(clearGeminiSlice());

  const handleMenu = () => {
    dispatch(toggleMenuView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL}));
            navigate('/browse');
        } else {
            dispatch(removeUser());
            navigate('/');
        }
    });

    return () => unsubscribe();
}, []);

  return (
    <>
        <div className='absolute z-41 w-full px-8 py-6 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-44' src={logo} alt="logo" />
            {user && 
          <div className='flex items-center justify-between'>
            {searchBtn && <button className='self-center h-[100%] text-white px-3 backdrop-blur-3xl hover:bg-red-700 border-2 rounded-3xl mx-8' onClick={handleSearch}>
              {!searchView ? 'Search' : 'Browse'}
            </button>}
            <div className='relative flex flex-col items-center'>
              {searchBtn && <button onClick={handleMenu} className='px-2 font-bold text-white hover:shadow-sm'>
                <img src={user.photoURL} alt="usericon" className='w-12 h-12 hover:border-red-600 hover:border-1' />
              </button>}
            </div>
          </div>}
        </div>
    </>
  )
}

export default Header
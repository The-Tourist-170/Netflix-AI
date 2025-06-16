import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error');
    });
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
        <div className='absolute z-10 w-full px-8 py-6 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-44' src={logo} alt="logo" />
            {user && 
            <div className='flex py-4'>
              <img src={user.photoURL} alt="usericon" className='w-12 h-12' />
              <button onClick={handleSignOut} className='px-2 font-bold text-white'>(Sign Out)</button>
            </div>}
        </div>
    </>
  )
}

export default Header
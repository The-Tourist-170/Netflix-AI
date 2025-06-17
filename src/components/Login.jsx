import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate'
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { userAvatar } from '../utils/constants';
import { bgUrl } from '../utils/constants';

const Login = () => {

    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleBtnClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;
        
        if(!isSignInForm){
            createUserWithEmailAndPassword(
                        auth, 
                        email.current.value, 
                        password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                                displayName: name.current.value, 
                                photoURL: userAvatar
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL}));
                }).catch((error) => {
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
            });
        }else{
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
  });
        }

    }

    const handleToggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <>
        <Header/>
        <div className='absolute'>
            <img 
                src={bgUrl} 
                alt="background" />
        </div>
        <form className='
                        w-3/12 absolute p-12 
                        bg-black/70 text-amber-50 
                        my-36 mx-auto right-0 left-0 rounded-lg'
              onSubmit={(e) => e.preventDefault()}>
            
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Register"}
            </h1>

            {!isSignInForm && (
                <input 
                    ref={name}
                    type='text' 
                    placeholder='Full Name' 
                    className='p-2 my-4 w-full bg-gray-900'/>
            )}

            <input 
                ref={email}
                type='text' 
                placeholder='Email Address' 
                className='p-2 my-4 w-full bg-gray-900'/>
            
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='p-2 my-4 w-full bg-gray-900'/>
            
            <p className='text-red-700 text-lg font-bold py-1.5'>{errorMessage}</p>
            
            <button className='p-4 myfalse-6 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>
                {isSignInForm ? "Sign In" : "Create Account"}
            </button>
            
            <p className='py-4 cursor-pointer' onClick={handleToggleForm}>
                {isSignInForm ? "New to Netflix? Register Now" : "Already a member? Sign In Now"}
            </p>
        </form>

    </>
  )
}

export default Login
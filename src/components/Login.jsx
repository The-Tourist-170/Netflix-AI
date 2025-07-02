import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate'
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgUrl, userAvatar } from '../utils/constants';

const Login = () => {

    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleBtnClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        setLoading(true);
        
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
                setLoading(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
                setLoading(false);
            });
        }else{
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
.then((userCredential) => {
    const user = userCredential.user;
    setLoading(false);
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
    setLoading(false);
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
                className='p-2 my-4 w-full outline-0 bg-gray-900 hover:border-2 hover:border-red-700 focus:border-red-700 focus:border-2'/>
            
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='p-2 my-4 w-full bg-gray-900 outline-0 hover:border-2 hover:border-red-700 focus:border-red-700 focus:border-2'/>
            
            <p className='text-red-700 text-lg font-bold py-1.5'>{errorMessage}</p>
            
            <button
                className='p-2 bg-red-700 w-full rounded-lg text-xl font-semibold hover:bg-black/80 hover:text-red-700 hover:font-semibold flex items-center justify-center'
                        onClick={handleBtnClick}
                        disabled={loading} >
                {loading ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                ) : (
                    isSignInForm ? "Sign In" : "Create Account"
                )}
            </button>
            <p className='py-4 cursor-pointer hover:text-red-500' onClick={handleToggleForm}>
                {isSignInForm ? "New to Netflix? Register Now" : "Already a member? Sign In Now"}
            </p>
        </form>
    </>
  )
}

export default Login
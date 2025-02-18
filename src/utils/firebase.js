import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByucsc51R5uW6QPSUb8GOr_orUOvR-Jx0",
  authDomain: "netflixgpt-68081.firebaseapp.com",
  projectId: "netflixgpt-68081",
  storageBucket: "netflixgpt-68081.firebasestorage.app",
  messagingSenderId: "559447042857",
  appId: "1:559447042857:web:15951d8264d5d6271e6538",
  measurementId: "G-XHBNW6GD52"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3vxnwSBFgH0IO0PQl3sFP7Mg0kpsW-l4",
  authDomain: "netflix-ai-3821.firebaseapp.com",
  projectId: "netflix-ai-3821",
  storageBucket: "netflix-ai-3821.firebasestorage.app",
  messagingSenderId: "958850679825",
  appId: "1:958850679825:web:77acb7f8021d2798699db0",
  measurementId: "G-STFSER0MVW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
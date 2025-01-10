// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_C_LakLPJlU4orVqOGPzcntWhviV-tBU",
  authDomain: "lingo-bingo-628fe.firebaseapp.com",
  projectId: "lingo-bingo-628fe",
  storageBucket: "lingo-bingo-628fe.firebasestorage.app",
  messagingSenderId: "370192210153",
  appId: "1:370192210153:web:e319d0094fb996869a3878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

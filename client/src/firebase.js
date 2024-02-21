// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-93598.firebaseapp.com",
    projectId: "mern-blog-93598",
    storageBucket: "mern-blog-93598.appspot.com",
    messagingSenderId: "868810371814",
    appId: "1:868810371814:web:f9280f375fabdc9b1ac127"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

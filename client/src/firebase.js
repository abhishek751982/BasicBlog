// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-530b3.firebaseapp.com",
  projectId: "mern-blog-530b3",
  storageBucket: "mern-blog-530b3.appspot.com",
  messagingSenderId: "214735981766",
  appId: "1:214735981766:web:e630e413433184d432dbc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
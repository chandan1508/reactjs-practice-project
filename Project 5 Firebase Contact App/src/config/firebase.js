// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxTrsfiYCceQbe1_8PZr5ktMQwu-dU1pU",
  authDomain: "vite-contact-721a0.firebaseapp.com",
  projectId: "vite-contact-721a0",
  storageBucket: "vite-contact-721a0.appspot.com",
  messagingSenderId: "554002250341",
  appId: "1:554002250341:web:506547ecc3769a98ad248c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
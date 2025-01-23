// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRHwM_FDoh8lEdJX-TklTgUmXcGW-mNo8",
  authDomain: "joni-s-database.firebaseapp.com",
  projectId: "joni-s-database",
  storageBucket: "joni-s-database.firebasestorage.app",
  messagingSenderId: "791925969714",
  appId: "1:791925969714:web:f1bcf0358cfe4d6376bd2b",
  measurementId: "G-YVE4WYYFYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

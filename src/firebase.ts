// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPFduPU9k2zuPBNtd-1RpRsHqTSJ-DVC4",
  authDomain: "mahendra-1290.firebaseapp.com",
  projectId: "mahendra-1290",
  storageBucket: "mahendra-1290.appspot.com",
  messagingSenderId: "786703622524",
  appId: "1:786703622524:web:617bb4b1ec1e6ac8ac44f9",
  measurementId: "G-L4ZRWFZDX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
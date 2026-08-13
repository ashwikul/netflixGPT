// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfAJ9SrWVq_FbLF5UuYE7uc4BUX6BqYmc",
  authDomain: "netflix-gpt-9c069.firebaseapp.com",
  projectId: "netflix-gpt-9c069",
  storageBucket: "netflix-gpt-9c069.firebasestorage.app",
  messagingSenderId: "439770124219",
  appId: "1:439770124219:web:bf75567208844848d67e9e",
  measurementId: "G-M0K23HWH5V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

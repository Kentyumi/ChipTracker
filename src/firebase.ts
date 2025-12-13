
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFJ_w3rD71JiPrf0raY7RMu3s1oGmKFG4",
  authDomain: "chiptracker-2b0e5.firebaseapp.com",
  projectId: "chiptracker-2b0e5",
  storageBucket: "chiptracker-2b0e5.firebasestorage.app",
  messagingSenderId: "875995294854",
  appId: "1:875995294854:web:5ae53c98764823bf133507",
  measurementId: "G-7HRV0ZN3FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXX",
  authDomain: "chiptracker-2b0e5.firebaseapp.com",
  databaseURL: "https://chiptracker-2b0e5-default-rtdb.firebaseio.com",
  projectId: "chiptracker-2b0e5",
  storageBucket: "chiptracker-2b0e5.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "1:XXXXXXXXXX:web:XXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);

// ✅ EXPORT db — DÒNG QUAN TRỌNG NHẤT
export const db = getDatabase(app);

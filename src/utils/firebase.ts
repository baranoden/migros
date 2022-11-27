import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAi_c-K2itSug4brwSa-P2I_tFb25rO2NY",
  authDomain: "mehmet-2af1a.firebaseapp.com",
  databaseURL:
    "https://mehmet-2af1a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mehmet-2af1a",
  storageBucket: "mehmet-2af1a.appspot.com",
  messagingSenderId: "401926067282",
  appId: "1:401926067282:web:5e9f4d3de2e42aa3b1fb8b",
  measurementId: "G-5ZWJXWSS66",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

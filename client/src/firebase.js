"use strict";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernrealestateproject-8522f.firebaseapp.com",
  projectId: "mernrealestateproject-8522f",
  storageBucket: "mernrealestateproject-8522f.appspot.com",
  messagingSenderId: "981228078270",
  appId: "1:981228078270:web:38918144d939122c8a8aef",
  measurementId: "G-QF97C74516",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

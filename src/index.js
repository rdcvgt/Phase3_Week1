import React, { createContext } from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: "practice-9ef70.firebaseapp.com",
	projectId: "practice-9ef70",
	storageBucket: "practice-9ef70.appspot.com",
	messagingSenderId: "396093142256",
	appId: "1:396093142256:web:1b6e45d30550059b2dfe35",
	measurementId: "G-0NHZD03EZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

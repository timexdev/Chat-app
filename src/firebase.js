// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaFLJrfOk1RRPiQq3ukI-sw6njFUVXmX8",
  authDomain: "chat-88a2a.firebaseapp.com",
  projectId: "chat-88a2a",
  storageBucket: "chat-88a2a.appspot.com",
  messagingSenderId: "421180234089",
  appId: "1:421180234089:web:608a023c4effc97fc045f8",
  measurementId: "G-M6CXWG5B9F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()
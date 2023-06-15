// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL_uE6kbuCnue7SKjmtIMYwLCBQBZD02k",
  authDomain: "ja-chat-app-6f38f.firebaseapp.com",
  databaseURL: "https://ja-chat-app-6f38f-default-rtdb.firebaseio.com",
  projectId: "ja-chat-app-6f38f",
  storageBucket: "ja-chat-app-6f38f.appspot.com",
  messagingSenderId: "56209329228",
  appId: "1:56209329228:web:6e66ddb941814dcfd2f8e9",
  measurementId: "G-CEFVB7J0JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

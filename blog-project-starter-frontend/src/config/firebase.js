import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRqvZvuSCjXKuofyLqN_hFb2GCffwgzgg",
  authDomain: "blog-app-2e78f.firebaseapp.com",
  projectId: "blog-app-2e78f",
  storageBucket: "blog-app-2e78f.firebasestorage.app",
  messagingSenderId: "609411984411",
  appId: "1:609411984411:web:0f2d4dbfc5901adf0ddcbe",
  measurementId: "G-BXYMF93R2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)


export default auth
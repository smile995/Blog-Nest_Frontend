// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAddD5ptIO2dPvkCtQ6jBs4i7Yhr8F_0gs",
  authDomain: "explore-b811-blog.firebaseapp.com",
  projectId: "explore-b811-blog",
  storageBucket: "explore-b811-blog.appspot.com",
  messagingSenderId: "217262285768",
  appId: "1:217262285768:web:e904c5290711cc73d256fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
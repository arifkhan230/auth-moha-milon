// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEA_Mx9ZtLgN9kI-h5RvV3r_-GQkPGAko",
  authDomain: "auth-moha-milon-dbb16.firebaseapp.com",
  projectId: "auth-moha-milon-dbb16",
  storageBucket: "auth-moha-milon-dbb16.appspot.com",
  messagingSenderId: "473856117594",
  appId: "1:473856117594:web:86f7fdc34b5f742893c163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
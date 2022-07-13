// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlhTEdRTnZ-_bnWivNyMECC77w9WS2DqY",
    authDomain: "login-form-e2677.firebaseapp.com",
    projectId: "login-form-e2677",
    storageBucket: "login-form-e2677.appspot.com",
    messagingSenderId: "10421207413",
    appId: "1:10421207413:web:0d430cfd7f53a9a7bfd33c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
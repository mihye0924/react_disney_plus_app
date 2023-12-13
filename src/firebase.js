// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSBJrKBOGloU4g0oqxIfaav-kFfA-XQXg",
  authDomain: "react-disney-plus-app-4bcc7.firebaseapp.com",
  projectId: "react-disney-plus-app-4bcc7",
  storageBucket: "react-disney-plus-app-4bcc7.appspot.com",
  messagingSenderId: "931698685243",
  appId: "1:931698685243:web:2d5a3c0666825c23eef31e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
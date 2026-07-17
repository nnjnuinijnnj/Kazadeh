// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKhoGmV-8BeXijxbweqW3suhmI4rGMIRk",
  authDomain: "kazadeh-online.firebaseapp.com",
  projectId: "kazadeh-online",
  storageBucket: "kazadeh-online.firebasestorage.app",
  messagingSenderId: "1066989049488",
  appId: "1:1066989049488:web:3dbf308460ebd52c71ea15",
  measurementId: "G-R42LJEJBK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
